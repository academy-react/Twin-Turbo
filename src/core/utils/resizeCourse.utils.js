let view1 ="w-[350px] h-[400px] [&>div:lastChild>:lastChild]:flex-col shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden  hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer max-[450px]:justify-center max-[450px]:h-[350px] max-[350px]:h-[330px]";
const resizeCourse = (parent) => {
    
    let children = parent.current.children;

    for (let i = 0; i < children.length; i++) {
        if(window.innerWidth < 800 && location.pathname == "/courses") {
            radios1.checked = true
            children[i].children[0].style.marginTop = "10px"
            children[i].style.height = "400px"
            children[i].children[0].style.height = "180px"
            parent.current.children[i].lastChild.children[2].style.display = "none";
            parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
            parent.current.children[i].lastChild.lastChild.style.width = "180px"
            parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
            parent.current.children[i].lastChild.lastChild.style.right = "0px"
            parent.current.children[i].lastChild.firstChild.lastChild.innerHTML = view1;
            children[i].className = view1;
        }
        else if(window.innerWidth > 800 && window.innerWidth < 1350 && radios2.checked && location.pathname == "/courses") {
            children[i].style.height = "250px"
            children[i].children[0].style.height = "180px"
            children[i].children[0].style.marginTop = "30px"
            parent.current.children[i].lastChild.lastChild.style.bottom = "20px"
        } 
        else if(window.innerWidth > 1350 && radios1.checked == false) {
            children[i].style.height = "300px"
            children[i].children[0].style.height = "92%"
            children[i].children[0].style.marginTop = "10px"
        }
        if(radios1.checked && radios1.checked == false) {
            children[i].style.height = "400px"
        }
        if(window.innerWidth > 0 && window.innerWidth < 1150 && radios1.checked == false) {
            parent.current.children[i].lastChild.lastChild.style.flexDirection = "column"
            parent.current.children[i].lastChild.lastChild.style.width = "200px"
            parent.current.children[i].lastChild.lastChild.style.alignItems = "flex-start"
        }
        else if(window.innerWidth > 1150 && radios1.checked == false) {
            parent.current.children[i].lastChild.lastChild.style.flexDirection = "row"
            parent.current.children[i].lastChild.lastChild.style.width = "500px"
            parent.current.children[i].lastChild.lastChild.style.alignItems = "center"
        }
    }
}

export default resizeCourse