
const darkMode = () => {
    if(location.pathname == "/") {
        var elementImages = [heroSection.children[0] , heroSectionWoman , servicesWoman , servicesMan , servicesPath ]
        var lightSrc = ["../src/assets/images/heroSection/bg-top.png" , "../src/assets/images/heroSection/woman.png" , "../src/assets/images/landingService/Group 159.png" , "../src/assets/images/landingService/Group 160.png" , "../src/assets/images/landingService/Path 620.png"]
        var darktSrc = ["../src/assets/images/heroSection/bg-top-dark.png" , "../src/assets/images/heroSection/woman-dark.png" , "../src/assets/images/landingService/Group 159-dark.png" , "../src/assets/images/landingService/Group 160-dark.png" , "../src/assets/images/landingService/Path 620-dark.png"]
    }
    let loc = localStorage.getItem("theme")

    for(let i in elementImages) {
        if(loc == "light"){
            document.documentElement.className = "light"
            if(location.pathname == "/") elementImages[i].src = lightSrc[i]
        }
        else if(loc == "dark"){
            document.documentElement.className = "dark"
            if(location.pathname == "/") elementImages[i].src = darktSrc[i]
        }
    }
}

export default darkMode