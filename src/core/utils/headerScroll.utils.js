const headerScroll = () => {
    let y = 200
    if(location.pathname == "/") y = 600
    if (pageYOffset > y) {
        header.style.boxShadow = "0 0 7px #ddd" ;
        header.style.background = "#fff";
        header.style.position = "fixed";
    }
    else {
        header.style.boxShadow = "0 0 7px transparent" ;
        header.style.background = "transparent";
        header.style.position = "static";
    }
}

export default headerScroll