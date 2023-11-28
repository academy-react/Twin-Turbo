import customAxios from "../services/interceptor";

const create = async (parentItem,element,order) => {


    let resultReply = await customAxios.get(`/Course/GetCourseReplyCommnets/${element.courseId}/${element.id}`)

    resultReply.map((element,index)=> {
        let div = document.createElement("div");
        div.className = "w-[400px] h-[150px] border border-[red]"
        div.innerHTML = element.describe;
        parentItem.appendChild(div)
    })
    showResponseFlag = false

    


}


export default create