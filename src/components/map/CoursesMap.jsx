import { useLocation, useNavigate } from "react-router-dom";
import { useRef , useState , useEffect } from "react";
import customAxios from '../../core/services/interceptor'
import ReactStars from "react-stars";

let addToCourse;
let Rows;
let settingPageNumber;
let settingSort;
let settingInput;

const CoursesMap = () => {

    let location = useLocation();
    let item = useRef();
    let navigate = useNavigate()

    const [course, setCourse] = useState([])
    const [rowsOfPage, setRowsOfPage] = useState(4)
    const [PageNumber, setPageNumber] = useState(1)
    const [sort, setSort] = useState("Active")
    const [input, setInput] = useState("")


    useEffect(() => {
      console.log(input);
    }, [input])
    

    
    const getCoursesAll = async () => {
      let result = await customAxios.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sort}&SortType=DESC${input ? `&Query=${input}` : ""}&TechCount=0`) 
      setCourse(result.courseFilterDtos)

      setTimeout(() => {
          console.log(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sort}&SortType=DESC&Query=${"دوره"}&TechCount=0`);
      }, 5000);
    }

    useEffect(() => {getCoursesAll()}, [rowsOfPage])

    useEffect(() => {getCoursesAll()}, [PageNumber])

    useEffect(() => {getCoursesAll()}, [sort])
    
    useEffect(() => {getCoursesAll()}, [input])

    useEffect(() => {

      addToCourse = setCourse
      Rows = setRowsOfPage
      settingPageNumber = setPageNumber
      settingSort = setSort
      settingInput = setInput
      getCoursesAll()
      
    }, [])

    return (

      course.map((element, index) => {
          return (
              <div key={index} className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer " ref={item} onClick={()=> navigate(`${location.pathname}/${element.courseId}`)} >
                <div className="w-full h-[170px] overflow-hidden my-[10px]">
                  <img src={element.tumbImageAddress} className="mx-auto h-full w-full rounded-[20px]"/>
                </div>
                <div dir="rtl" className="w-full h-[210px] mx-auto relative">
                  <p className="text-[24px] absolute right-2">{element.title}</p>


                  <div className="w-[50px] h-[70px]" style={{display:"none"}}></div>
                  <div className="w-7 absolute left-1 top-1 flex flex-col items-center">
                    <img src="../src/assets/images/selectedCourse/likeDefault.png" alt="" />
                    <span className="mt-1 whitespace-nowrap">{element.likeCount}</span>
                  </div>
                  
                  <div className="w-7 absolute left-1 top-[70px] flex flex-col items-center">
                    <img src="../src/assets/images/selectedCourse/disslikeDefault.png" alt="" />
                    <span className="mt-1 whitespace-nowrap">{element.dissLikeCount}</span>
                  </div>

                  <div className="w-7 absolute left-1 bottom-5 flex flex-col items-center">
                    <img className="ml-1" src="../src/assets/images/selectedCourse/registered.png" />
                    <div className="mt-1 whitespace-nowrap">{element.currentRegistrants}</div>
                  </div>

                  <div className=" flex justify-between items-start absolute bottom-[20px] h-[110px] mr-2" style={{flexDirection:"column",width:"180px",bottom:"20px"}}>
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
