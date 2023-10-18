import { useLocation, useNavigate } from "react-router-dom";
import blogs from "../../core/services/blogDB";
import findPath from '../../core/utils/findPath.utils'

const SelectedBlog = () => {
    let location = useLocation();
    let navigate = useNavigate();

    return blogs.map((element, index) => {
        return (
        <div key={index} className="w-full h-[120px] flex cursor-pointer mr-4  max-[1355px]:h-[100px]" onClick={() => findPath(index,location,navigate)}>
            <div className="w-[570px] h-full flex items-center justify-center">
                <img src={"../src/assets/images/courses/" + element.src} alt="" className="h-[110px] rounded-[15px] max-[1355px]:h-[85px]"/>
            </div>
            <div className="w-[70%] h-full py-[5px] px-[15px] flex flex-col justify-center">
                <p className="text-[25px] max-[1355px]:text-[22px]">{element.name}</p>
                <p className="text-[#777] w-[90%] truncate max-[1355px]:text-[13px]">{element.content}</p>
            </div>
        </div>
        );
    });
};

export default SelectedBlog;
