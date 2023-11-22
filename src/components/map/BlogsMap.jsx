import { useEffect, useRef , useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../common";
import customAxios from "../../core/services/interceptor";

let setBlog;
const BlogsMap = () => {

    let location = useLocation();
    let item = useRef();
    let content = useRef();

    const [blogsItem, setBlogsItem] = useState([])

    const getBlogs = async () => {
      let result = await customAxios.get("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC") 
      setBlogsItem(result.news)
      console.log(result);
    }

    setBlog = blogsItem
    useEffect(() => {
      getBlogs()
    }, [])
    
    return (
        blogsItem.map((element, index) => {
            return (
              <div key={index} className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end max-[450px]:justify-center overflow-hidden" ref={item}> 
                <div className="w-full h-170px overflow-hidden my-[10px]">  

                  <img src={element.currentImageAddressTumb} alt="" className=" mx-auto h-full w-full rounded-[20px]"   /> 
                
                </div>
                <div dir="rtl" className="w-full h-[210px] mx-auto">
                  <div className="w-[95%] h-[150px] mx-auto"> 

                    <p className="text-[24px] text-right max-[450px]:text-center">{element.title}</p> 
                    <div className="text-[#777] w-full mt-[15px] leading-6 max-[450px]:text-center" ref={content}>{element.miniDescribe.length >= 140 ? element.miniDescribe.slice(0,140) + "..." : element.miniDescribe}</div>
                  
                  </div>
                <div className="w-full h-[50px] pb-2 flex justify-between items-center">     
                <div className="text-[#777]">{element.newsCatregoryName}</div>     
                <Button content="ادامه مطلب" className="whitespace-nowrap text-[16px] scale-[80%]" link={`${location.pathname}/${element.id}`}     />   </div> </div>
              </div>
            );
        })
    )
}
export {setBlog}
export default BlogsMap