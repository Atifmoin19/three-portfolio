export const onlyAllowTypingNumbers = (e: any) => {
  if (!(e.key === "Backspace" || e.key === "Tab" || e.key === "ArrowDown")) {
    if (e.key.charCodeAt(0) < 48 || e.key.charCodeAt(0) > 57) {
      e.preventDefault();
    }
  }
};
export const onlyAllowAlphaNumeric = (e: any) => {
  if (
    (e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58) ||
    (e.key.charCodeAt(0) > 64 && e.key.charCodeAt(0) < 91) ||
    (e.key.charCodeAt(0) > 96 && e.key.charCodeAt(0) < 123)
  ) {
    console.log("");
  } else {
    e.preventDefault();
  }
};
export const onlyAllowTypingAlphabet = (e: any) => {
  if (
    (e.key.charCodeAt(0) > 64 && e.key.charCodeAt(0) < 91) ||
    (e.key.charCodeAt(0) > 96 && e.key.charCodeAt(0) < 123) ||
    e.key == " "
  ) {
    console.log("");
  } else {
    e.preventDefault();
  }
};

export const mobileNumRegex = /^[6-9]{1}[0-9]{9}$/;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
