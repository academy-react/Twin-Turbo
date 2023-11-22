import customAxios from "../services/interceptor";

const landingCourseSelector = async (e,pic,title,master,content,landingCourse,setNum) => {
    let result = await customAxios.get("/Home/GetCoursesTop?Count=4")
    result.shift()
    console.log(result);
    let num = e.target.getAttribute("data-id")
    console.log(result);
    setTimeout(() => {
        pic.src = e.target.getAttribute("src")
        title.innerHTML = "دوره کامل : " + result[num].classRoomName
        master.innerHTML = result[num].teacherName  
        content.innerHTML =  result[num].describe  

        landingCourse.setAttribute("data-id",num)
        setNum(landingCourse.getAttribute("data-id"))
    }, 100);

}

export default landingCourseSelector