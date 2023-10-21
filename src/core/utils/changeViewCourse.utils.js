import courseDB from '../services/courseDB'
let view1 ="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden ";
let view2 ="w-[95%] h-[300px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex overflow-hidden [&>div:nth-child(2)>div:first-child]:h-[20%] [&>div:nth-child(2)>div:first-child]:h-[80%] [&>div:nth-child(2)>div:first-child]:w-full [&>div:nth-child(2)>div:first-child]:pt-[30px] [&>div:nth-child(2)]:h-full [&>div:nth-child(2)>div:first-child>p]:text-[28px] [&>div:nth-child(2)]:w-[60%] [&>div:nth-child(2)>div:first-child>div]:my-[40px] [&>div:first-child]:w-[350px] [&>div:first-child]:flex [&>div:first-child]:items-center [&>div:first-child]:pr-[15px] [&>div:first-child>img]:h-[85%]";
let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
let colView ="آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است";

const changeViewCourses = (parent) => {
  let children = parent.current.children;
  for (let i = 0; i < children.length; i++) {
    if (radios1.checked == true) {
      parent.current.children[i].lastChild.children[2].style.display = "none";
      parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
      parent.current.children[i].lastChild.lastChild.style.width = "180px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
      parent.current.children[i].lastChild.lastChild.style.right = "0px"
      parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = rowView;
      children[i].className = "";
      children[i].className = view1;
    } else if (radios1.checked == false) {
      children[2].style.display = "block";
      parent.current.children[i].lastChild.lastChild.style.flexDirection = "row"
      parent.current.children[i].lastChild.lastChild.style.width = "500px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "0px"
      parent.current.children[i].lastChild.lastChild.style.right = "0px"
      parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = colView;
      children[i].className = "";
      children[i].className = view2;
    }
  }
};

export default changeViewCourses;
