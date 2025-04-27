import {
  Box,
  Button,
  Flex,
  Input,
  useToast,
  Image,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { firestore } from "../firebase/index";
import {
  onlyAllowTypingAlphabet,
  onlyAllowTypingNumbers,
  mobileNumRegex,
  emailRegex,
} from "Services/general";
import { FontSizeBody, FontSizeHeading } from "Consts";
import { motion } from "framer-motion";
import useInView from "Services/CustomHooks/useInView";

const Contact = () => {
  const { id } = useParams();
  var date = new Date().toLocaleString();
  const [todo, setTodo] = useState<any[]>([]);
  const [isLoding, setIsLoding] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const fetchPost = async () => {
    await getDocs(collection(firestore, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTodo(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const onSubmit = async (data: any) => {
    setIsLoding(true);
    const duplicate = todo.find((element) => element.email === data.Email);
    if (duplicate === undefined) {
      try {
        const docRef = await addDoc(collection(firestore, "todos"), {
          fname: data.FirstName,
          lname: data.LastName,
          email: data.Email,
          mobile: data.Mobile,
          message: data.Message,
          date: date,
        });
        toast({
          title: "Successful",
          position: "bottom",
          status: "success",
          description: `Thanks  ${
            " " + data.FirstName + " " + data.LastName
          } for contacting me `,
        });
        setIsLoding(false);
        navigate("/");
      } catch (e) {
        toast({
          title: e as React.ReactNode,
          position: "bottom",
          status: "error",
        });
        setIsLoding(false);
        console.error("Error adding document: ", e);
      }
    }
    var answer = window.confirm("Do you want to send contact again?");
    if (duplicate !== undefined && answer) {
      console.log("ho gaya dopnara");
      try {
        const docRef = await addDoc(collection(firestore, "todos"), {
          fname: data.FirstName,
          lname: data.LastName,
          email: data.Email,
          mobile: data.Mobile,
          message: data.Message,
          date: date,
        });
        toast({
          title: "Successful",
          position: "bottom",
          status: "success",
          description: `Thanks  ${
            " " + data.FirstName + " " + data.LastName
          } for contacting me `,
        });
        setIsLoding(false);
        navigate("/");
      } catch (e) {
        setIsLoding(false);
        console.error("Error adding document: ", e);
      }
    }
  };
  const ref = useRef(null);
  const inView = useInView({ targetRef: ref, offset: "200px" });

  return (
    <Flex
      ref={ref}
      ml={{ lg: "2rem", md: "2rem", sm: "0", xs: "0" }}
      initial={{ x: -30, opacity: 0 }}
      animate={
        inView ? { x: 0, opacity: 1, transition: { duration: 0.3 } } : {}
      }
      as={motion.div}
      w={{ lg: "500px", md: "100%", sm: "100%", xs: "100%" }}
      rounded={"xl"}
      direction={"column"}
      my={"auto"}
      bg={"primary.800"}
      p={"2rem"}
    >
      <Box
        justifyContent={"center"}
        alignItems="center"
        p={".3rem 2rem"}
        fontSize={FontSizeBody}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text color="secondary.500">Get In Touch</Text>
          <Text fontSize={FontSizeHeading} color="#fff" className="maintext">
            Contact.
          </Text>
          <Flex direction={"column"} gap="2" w={"100%"} my={"1rem"}>
            <Text fontWeight={"bold"} color={"#fff"}>
              {" "}
              First Name{" "}
              <Text as="span" color={"red"}>
                *
              </Text>
            </Text>

            <Input
              onKeyDown={onlyAllowTypingAlphabet}
              w={"100%"}
              placeholder="Enter First Name"
              {...register("FirstName", {
                required: true,
                pattern: /^(?!\s).+(?<!\s)$/,
              })}
              className={
                errors &&
                (errors.FirstName?.type === "pattern" ||
                  errors.FirstName?.type === "required")
                  ? "inputCustom"
                  : ""
              }
            />
            {/* {JSON.stringify(errors)} */}
            {errors && errors.FirstName?.type === "pattern" && (
              <Text color={"red"} fontSize={"10px"}>
                Invalid First Name
              </Text>
            )}

            {errors && errors.FirstName?.type === "required" && (
              <Text color={"red"} fontSize={"10px"}>
                First Name is Required
              </Text>
            )}
          </Flex>
          <Flex direction={"column"} gap="2" w={"100%"} my={"1rem"}>
            <Text fontWeight={"bold"} color={"#fff"}>
              {" "}
              Last Name{" "}
              <Text as="span" color={"red"}>
                *
              </Text>
            </Text>
            <Input
              onKeyDown={onlyAllowTypingAlphabet}
              w={"100%"}
              placeholder="Enter Last Name"
              {...register("LastName", {
                required: true,
                pattern: /^(?!\s).+(?<!\s)$/,
              })}
              className={
                errors &&
                (errors.LastName?.type === "pattern" ||
                  errors.LastName?.type === "required")
                  ? "inputCustom"
                  : ""
              }
            />
            {errors && errors.LastName?.type === "pattern" && (
              <Text color={"red"} fontSize={"10px"}>
                Invalid Last Name
              </Text>
            )}

            {errors && errors.LastName?.type === "required" && (
              <Text color={"red"} fontSize={"10px"}>
                Last Name is Required
              </Text>
            )}
          </Flex>

          <Flex direction={"column"} gap="2" w={"100%"} my={"1rem"}>
            <Text fontWeight={"bold"} color={"#fff"}>
              {" "}
              Mobile{" "}
              <Text as="span" color={"red"}>
                *
              </Text>{" "}
            </Text>
            <Input
              maxLength={10}
              onKeyDown={onlyAllowTypingNumbers}
              w={"100%"}
              placeholder="Enter Mobile Number"
              {...register("Mobile", {
                required: true,
                pattern: mobileNumRegex,
              })}
              className={
                errors &&
                (errors.Mobile?.type === "pattern" ||
                  errors.Mobile?.type === "required")
                  ? "inputCustom"
                  : ""
              }
            />{" "}
            {errors && errors.Mobile?.type === "pattern" && (
              <Text color={"red"} fontSize={"10px"}>
                Invalid Mobile Number
              </Text>
            )}
            {errors && errors.Mobile?.type === "required" && (
              <Text color={"red"} fontSize={"10px"}>
                Mobile Number is Required
              </Text>
            )}
          </Flex>
          <Flex direction={"column"} gap="2" w={"100%"} my={"1rem"}>
            <Text fontWeight={"bold"} color={"#fff"}>
              {" "}
              Email{" "}
              <Text as="span" color={"red"}>
                *
              </Text>
            </Text>
            <Input
              w={"100%"}
              type="email"
              placeholder="Enter Email"
              {...register("Email", {
                required: true,
                pattern: emailRegex,
              })}
              className={
                errors &&
                (errors.Email?.type === "pattern" ||
                  errors.Email?.type === "required")
                  ? "inputCustom"
                  : ""
              }
            />

            {errors && errors.Email?.type === "pattern" && (
              <Text color={"red"} fontSize={"10px"}>
                Invalid Email
              </Text>
            )}
            {errors && errors.Email?.type === "required" && (
              <Text color={"red"} fontSize={"10px"}>
                Email is Required
              </Text>
            )}
          </Flex>

          <Flex direction={"column"} gap="2" w={"100%"} my={"1rem"}>
            <Text fontWeight={"bold"} color={"#fff"}>
              {" "}
              Message{" "}
            </Text>
            <Textarea
              resize={"none"}
              w={"100%"}
              placeholder="Enter Message ...."
              {...register("Message", { required: true })}
            />
          </Flex>

          <Flex justifyContent={"center"}>
            <Button mx={"auto"} w={"fit-content"} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Contact;
