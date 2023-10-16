let view1 ="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden";
let view2 ="w-[95%] h-[300px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex overflow-hidden [&>div:nth-child(2)>div:first-child]:h-[20%] [&>div:nth-child(2)>div:first-child]:h-[80%] [&>div:nth-child(2)>div:first-child]:w-full [&>div:nth-child(2)>div:first-child]:pt-[30px] [&>div:nth-child(2)]:h-full [&>div:nth-child(2)>div:first-child>p]:text-[28px] [&>div:nth-child(2)]:w-[60%] [&>div:nth-child(2)>div:first-child>div]:my-[40px] [&>div:first-child]:w-[31%]";
let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
let colView ="آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است";

const changeView = (parent) => {
  let children = parent.current.children;

  for (let i = 0; i < children.length; i++) {
    if (radios1.checked == true) {
      parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = rowView;
      children[i].className = "";
      children[i].className = view1;
    } else if (radios1.checked == false) {
      parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = colView;
      children[i].className = "";
      children[i].className = view2;
    }
  }
};

export default changeView;
