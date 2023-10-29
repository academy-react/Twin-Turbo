let view1 ="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden  hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer";
let view2 ="w-[95%] h-[300px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex overflow-hidden hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer [&>div:nth-child(2)>div:first-child]:h-[20%] [&>div:nth-child(2)>div:first-child]:h-[80%] [&>div:nth-child(2)>div:first-child]:w-full [&>div:nth-child(2)>div:first-child]:pt-[30px] [&>div:nth-child(2)]:h-full [&>div:nth-child(2)>div:first-child>p]:text-[28px] [&>div:nth-child(2)]:w-[60%] [&>div:nth-child(2)>div:first-child>div]:my-[40px] [&>div:first-child]:w-[31%] [&>div:first-child]:flex [&>div:first-child]:items-center [&>div:first-child]:pr-[15px] [&>div:first-child]:h-[92%] [&>div:nth-child(2)>:first-child]:top-[45px] [&>div:first-child>img]:h-[85%] [&>div:last-child>div]:left-[-10px] [&>div:last-child>div:last-child]:items-center";
let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
let flag = true

const changeViewCourses = (parent) => {

  let children = parent.current.children;
  for (let i = 0; i < children.length; i++) {
    if(radios1.checked == true && !flag) {
      parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
      flag = true
    }
    else if (radios2.checked == true && !flag) {
      parent.current.children[i].lastChild.lastChild.style.flexDirection = "row"
      flag = false
    }
    if (radios1.checked) {

      parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
      children[i].style.height = "400px"
      children[i].children[0].style.marginTop = "10px"
      children[i].children[0].style.height = "180px"
      parent.current.children[i].lastChild.lastChild.style.alignItems = "flex-start"
      parent.current.children[i].lastChild.children[2].style.display = "none";
      parent.current.children[i].lastChild.lastChild.style.width = "180px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
      parent.current.children[i].lastChild.lastChild.style.right = "0px"
      parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = rowView;
      children[i].className = view1;

    } 
    if (!radios1.checked && window.innerWidth > 1350) {
      children[i].children[0].style.height = "92%"
      children[i].style.height = "300px"
      parent.current.children[i].lastChild.lastChild.style.alignItems = "flex-start"
      parent.current.children[i].lastChild.lastChild.style.width = "500px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
      parent.current.children[i].lastChild.lastChild.style.right = "0px"
      children[i].className = view2;
      
    }
    else if(window.innerWidth > 800 && window.innerWidth < 1350 && !radios1.checked) {
      
      parent.current.children[i].lastChild.lastChild.style.width = "500px"
      parent.current.children[i].lastChild.lastChild.style.right = "0px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
      parent.current.children[i].lastChild.lastChild.style.alignItems = "flex-start"
      parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
      flag = true

      children[i].className = view2;
      children[i].style.height = "250px"
      children[i].children[0].style.height = "180px"
      children[i].children[0].style.marginTop = "30px"
    }
    else if(window.innerWidth > 0 && window.innerWidth < 1350 && !radios1.checked) {
      parent.current.children[i].lastChild.lastChild.style.width = "200px"
      parent.current.children[i].lastChild.lastChild.style.bottom = "25px"
      parent.current.children[i].lastChild.lastChild.style.alignItems = "center"
    }
  }
};

export default changeViewCourses;
