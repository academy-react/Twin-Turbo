import { useEffect, useRef , useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../common";
import customAxios from "../../core/services/interceptor";

let setBlog;
let Rowsing;
let settingPageNumberBlog;
let settingSort;
let setingInput;

const BlogsMap = () => {

    let location = useLocation();
    let item = useRef();
    let content = useRef();

    const [blogsItem, setBlogsItem] = useState([])
    const [input, setInput] = useState("")
    const [rowsOfPage, setRowsOfPage] = useState(4)
    const [PageNumber, setPageNumber] = useState(1)
    const [sort, setSort] = useState("Active")

    const getBlogs = async () => {
      let result = await customAxios.get(`/News?PageNumber=${PageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sort}&SortType=DESC&${input ? `&Query=${input}` : ""}`);
      setBlogsItem(result.news)
    }
    useEffect(() => {getBlogs()}, [input])

    useEffect(() => {getBlogs()}, [rowsOfPage])

    useEffect(() => {getBlogs()}, [PageNumber])

    useEffect(() => {getBlogs()}, [sort])
    

    
    useEffect(() => {

        setBlog = blogsItem
        Rowsing = setRowsOfPage
        settingPageNumberBlog = setPageNumber
        settingSort = setSort
        setingInput = setInput
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

export {setBlog , Rowsing,settingPageNumberBlog , settingSort, setingInput}
export default BlogsMap