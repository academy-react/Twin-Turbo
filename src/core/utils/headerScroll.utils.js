const headerScroll = () => {
    let y = 100
    if(location.pathname == "/") y = 600
    if (pageYOffset > y) {
        if(location.pathname !== "/login" && location.pathname !== "/forgetPassword") {
            header.style.boxShadow = "0 0 7px #ddd" ;
            header.style.background = "#fff";
            header.firstChild.style.paddingLeft = "25px"
        }
        else header.style.background = "linear-gradient(97deg, rgba(90,11,169,1) 0%, rgba(192,3,178,1) 100%)";
        header.style.position = "fixed";
    }
    else {
        header.style.boxShadow = "0 0 7px transparent" ;
        header.style.background = "transparent";
        header.firstChild.style.paddingLeft = 0
        header.style.position = "static";
    }
}

export default headerScroll