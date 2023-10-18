let view1 ="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden max-[450px]:justify-center max-[450px]:h-[350px] max-[350px]:h-[330px]";
let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
const resizeCourse = (parent) => {
    let children = parent.current.children;

    if(window.innerWidth < 800) {
        for (let i = 0; i < children.length; i++) {
            parent.current.children[i].lastChild.children[2].style.display = "none";
            parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = rowView;
            children[i].className = "";
            children[i].className = view1;
            
        }
        radios1.checked = true
    }
}

export default resizeCourse