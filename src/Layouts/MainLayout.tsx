import { Flex, FlexProps } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

interface IMainLayoutProps extends FlexProps {
  children: React.ReactNode;
}
const MainLayout = (props: IMainLayoutProps) => {
  const { children, ...rest } = props;
  return (
    <Flex
      width="100%"
      height="100%"
      minHeight="100vh"
      direction="column"
      position="relative"
      justifyContent="start"
      alignItems="start"
      {...rest}
    >
      <Navbar />
      {children}
    </Flex>
  );
};

export default MainLayout;
