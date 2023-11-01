import { useLocation, useNavigate } from "react-router-dom";
import courseDB from "../../core/services/courseDB";
import { useRef , useState } from "react";

let addToCourse;
const CoursesMap = () => {

    let location = useLocation();
    let item = useRef();
    let navigate = useNavigate()

    const [course, setCourse] = useState(courseDB.slice(0,4))
    addToCourse = setCourse

    return (

      course.map((element, index) => {
          return (
              <div key={index} className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden hover:shadow-[0_0_7px_#999] active:bg-[#eee] cursor-pointer " ref={item} onClick={()=> navigate(`${location.pathname}/${index + 1}`)} >
                <div className="w-full h-[170px] overflow-hidden my-[10px]">
                  <img src={"../src/assets/images/courses/" + element.src} className="mx-auto h-full w-full rounded-[20px]"/>
                </div>

                <div dir="rtl" className="w-full h-[210px] mx-auto relative">
                  <p className="text-[24px] absolute right-2">{element.name}</p>

                  <div className="w-12 h-24 rounded-[50px] absolute left-2 bottom-5 flex flex-col justify-between items-center overflow-hidden shadow-[0_0_7px_#ccc] [&>*:nth-child(even)]:bg-[#eee] [&>*]:bg-white [&>*]:w-full  [&>*]:h-[33.3%] [&>*]:flex [&>*]:items-center [&>*]:justify-center">
                    <img src="../src/assets/images/selectedCourse/capacity.png" className="p-[6px] px-2" />
                    <div>{element.fullStorage}</div>
                    <div>{element.quantityStudent}</div>
                  </div>

                  <div className="w-[50px] h-[70px]" style={{display:"none"}}></div>


                  <div className=" flex justify-between items-start absolute bottom-[20px] h-[100px] mr-2" style={{flexDirection:"column",width:"180px",bottom:"20px"}}>
                      <div className="text-[20px] w-[200px]">{element.masterName}</div>
                      <img src="../src/assets/images/star.png" className="w-36 ml-5" />
                      <span className="h-8 w-[230px] rounded-[50px] text-[#58AD57] flex justify-start items-center"> <span className="text-[#000] text-[18px]"> مبلغ : </span> &nbsp; {element.discount} تومان</span>
                  </div>

                </div>
              </div>
          );
      })

    );
};
export {addToCourse}
export default CoursesMap;
