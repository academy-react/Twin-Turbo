import customAxios from "../services/interceptor";

const create = async (parentItem,element,order) => {


    let resultReply = await customAxios.get(`/Course/GetCourseReplyCommnets/${element.courseId}/${element.id}`)
    resultReply.map((element,index)=> {
        let parent = document.createElement("div");
        parent.className = "w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative border border-[red]"
        parent.innerHTML = element.describe;
        parentItem.appendChild(parent)
    })  

    


}


export default create