import { useState } from "react"
import courses from "../../core/services/courseDB"


const landingCourseSelector = (e,pic,title,master,content) => {


    let num = e.target.getAttribute("data-id")

    pic.src = e.target.getAttribute("src")
    title.innerHTML = "دوره کامل : " + courses[num].name  
    master.innerHTML = courses[num].masterName  
    content.innerHTML =  courses[num].content  

    console.log(num);

}

export {landingCourseSelector}