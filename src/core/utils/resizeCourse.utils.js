let view1 ="w-[350px] h-[400px] [&>div:lastChild>:lastChild]:flex-col shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden max-[450px]:justify-center max-[450px]:h-[350px] max-[350px]:h-[330px]";
let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
const resizeCourse = (parent) => {

    if(window.innerWidth < 800 && location.pathname == "/courses") {
        let children = parent.current.children;
        for (let i = 0; i < children.length; i++) {
            parent.current.children[i].lastChild.children[2].style.display = "none";
            parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = rowView;
            children[i].className = view1;
            parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"            
            parent.current.children[i].lastChild.lastChild.style.width = "180px"
            parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
        }
        radios1.checked = true
    }
}

export default resizeCourse