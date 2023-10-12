const change = (num,setFlag) => {
  setFlag(num);

  if (num == true) {
    btn2.style.background = "transparent";
    btn1.style.background = "#f1ebf8";
  } else if (num == false) {
    btn1.style.background = "transparent";
    btn2.style.background = "#f1ebf8";
  }
};
export default change