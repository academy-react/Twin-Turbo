const change = (bool,setFlag) => {
  setFlag(bool);

  if (bool == true) {
    btn2.style.background = "transparent";
    btn1.style.background = "#f1ebf8";
  } else if (bool == false) {
    btn1.style.background = "transparent";
    btn2.style.background = "#f1ebf8";
  }
};
export default change