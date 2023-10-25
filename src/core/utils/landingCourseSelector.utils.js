import courses from "../../core/services/courseDB"

const landingCourseSelector = (e,pic,title,master,content,landingCourse,setNum) => {


    let num = e.target.getAttribute("data-id")

    pic.src = e.target.getAttribute("src")
    title.innerHTML = "دوره کامل : " + courses[num].name
    master.innerHTML = courses[num].masterName  
    content.innerHTML =  courses[num].content  

    landingCourse.setAttribute("data-id",num)
    setNum(landingCourse.getAttribute("data-id"))


}

export {landingCourseSelector}