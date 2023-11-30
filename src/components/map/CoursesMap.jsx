import { useLocation, useNavigate } from "react-router-dom";
import { useRef , useState , useEffect } from "react";
import customAxios from '../../core/services/interceptor'
import ReactStars from "react-stars";
import changeViewCourses from "../../core/utils/changeViewCourse.utils";

let addToCourse;
let Rows;
let settingPageNumber;
let settingSort;
let settingInput;

const CoursesMap = ({parent}) => {
    let view1 ="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer";
    let view2 ="w-[95%] h-[300px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex overflow-hidden hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer [&>div:nth-child(2)>div:first-child]:h-[20%] [&>div:nth-child(2)>div:first-child]:h-[80%] [&>div:nth-child(2)>div:first-child]:w-full [&>div:nth-child(2)>div:first-child]:pt-[30px] [&>div:nth-child(2)]:h-full [&>div:nth-child(2)>div:first-child>p]:text-[28px] [&>div:nth-child(2)]:w-[65%] [&>div:nth-child(2)>div:first-child>div]:my-[40px] [&>div:first-child]:w-[31%] [&>div:first-child]:flex [&>div:first-child]:items-center [&>div:first-child]:pr-[15px] [&>div:first-child]:h-[92%] [&>div:nth-child(2)>:first-child]:top-[45px] [&>div:first-child>img]:h-[85%] [&>div:last-child>div:last-child]:items-center";
  
    let state = sessionStorage.getItem("courseClass")
    let location = useLocation();
    let item = useRef();
    let navigate = useNavigate()
    
    const [course, setCourse] = useState([])
    const [rowsOfPage, setRowsOfPage] = useState(4)
    const [PageNumber, setPageNumber] = useState(1)
    const [sort, setSort] = useState("Active")
    const [input, setInput] = useState("")
    
    const getCoursesAll = async () => {
      let result = await customAxios.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sort}&SortType=DESC${input ? `&Query=${input}` : ""}&TechCount=0`) 
      setCourse(result.courseFilterDtos)
      setTimeout(() => {
        
        changeViewCourses(parent)
      }, 50);
    }
    
    useEffect(() => {getCoursesAll()}, [rowsOfPage])
    
    useEffect(() => {getCoursesAll()}, [PageNumber])
    
    useEffect(() => {getCoursesAll()}, [sort])
    
    useEffect(() => {
      getCoursesAll()
    }, [input])
    
    useEffect(() => {
      if(!sessionStorage.getItem("courseClass")) sessionStorage.setItem("courseClass","grid")
      addToCourse = setCourse
      Rows = setRowsOfPage
      settingPageNumber = setPageNumber
      settingSort = setSort
      settingInput = setInput
      getCoursesAll()
      
      console.log(parent);
    
      changeViewCourses(parent)
    }, [])

    return (

      course.map((element, index) => {
          return (
              <div key={index} className={state == "grid" ? view1 : view2} ref={item} onClick={()=> navigate(`${location.pathname}/${element.courseId}`)} >
                <div className="w-full h-[170px] overflow-hidden my-[10px]">
                  <img src={element.tumbImageAddress} className="mx-auto h-full w-full rounded-[20px]"/>
                </div>
                <div dir="rtl" className="w-full h-[210px] mx-auto relative">
                  <p className="text-[24px] absolute right-2">{element.title}</p>

                  <div className="w-7 absolute left-1 top-1 flex flex-col items-center">
                    <img src="../src/assets/images/selectedCourse/likeDefault.png" alt="" />
                    <span className="mt-1 whitespace-nowrap">{element.likeCount}</span>
                  </div>
                  
                  <div className="w-7 absolute left-1 top-[70px] flex flex-col items-center">
                    <img src="../src/assets/images/selectedCourse/disslikeDefault.png" alt="" />
                    <span className="mt-1 whitespace-nowrap">{element.dissLikeCount}</span>
                  </div>

                  <div className="w-7 absolute left-1 bottom-4 flex flex-col items-center">
                    <img className="ml-1" src="../src/assets/images/selectedCourse/registered.png" />
                    <div className="mt-1 whitespace-nowrap">{element.currentRegistrants}</div>
                  </div>

                  <div className=" flex justify-between items-start absolute bottom-[20px] h-[110px] mr-2" style={{flexDirection:"column",width:"180px"}}>
                      <div className="text-[20px] w-[200px] truncate">{element.teacherName}</div>
                      <div className="flex items-center justify-between text-[#888]">
                        <ReactStars size={30} color2="#ffbb1b" value={element.courseRate} half={true} edit={false} />
                        <span className="mr-2">{element.courseRate}</span>
                      </div>
                      <span className="h-8 w-[230px] rounded-[50px] text-[#58AD57] flex justify-start items-center"> <span className="text-[#000] text-[18px]"> مبلغ : </span> &nbsp; {element.cost} تومان</span>
                  </div>

                </div>
              </div>
          );
      })

    );
};
export {addToCourse , Rows , settingPageNumber , settingSort , settingInput}
export default CoursesMap;
