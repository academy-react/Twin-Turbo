const darkMode = () => {

    const changeMode = (theme , themeSrc) => {
        document.documentElement.className = theme
        for(let i in elementImages) if(location.pathname == "/") elementImages[i].src = themeSrc[i]
    }

    if(location.pathname == "/") {
        var elementImages = [heroSection.children[0] , heroSectionWoman , servicesWoman , servicesMan , servicesPath , mas1 , mas2 ]
        var lightSrc = ["../src/assets/images/heroSection/bg-top.png" , "../src/assets/images/heroSection/woman.png" , "../src/assets/images/landingService/Group 159.png" , "../src/assets/images/landingService/Group 160.png" , "../src/assets/images/landingService/Path 620.png" , "../src/assets/images/landingMaster/77777.png" , "../src/assets/images/landingMaster/Path 564.png"]
        var darktSrc = ["../src/assets/images/heroSection/bg-top-dark.png" , "../src/assets/images/heroSection/woman-dark.png" , "../src/assets/images/landingService/Group 159-dark.png" , "../src/assets/images/landingService/Group 160-dark.png" , "../src/assets/images/landingService/Path 620-dark.png" , "../src/assets/images/landingMaster/77777-dark.png" , "../src/assets/images/landingMaster/Path 564-dark.png"]
    }
    let loc = localStorage.getItem("theme")

    if(loc == "light")  changeMode("light" , lightSrc)
    else if(loc == "dark")  changeMode("dark" , darktSrc)
}

export default darkMode