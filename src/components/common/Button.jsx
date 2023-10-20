import { useNavigate } from "react-router-dom";
import scrollHandler from "../../core/utils/scrollHandler.utils"

const Button = ({ className, content , link }) => {
  
  let navigate = useNavigate()
  
  return (
    <div onClick={()=> scrollHandler(navigate,link)} className={"text-[#7a74e2] border border-[#7a74e2] px-5 py-2 rounded-[25px] cursor-pointer hover:bg-[#7a74e2] hover:text-white transition duration-300 text-[21px] " + className}>{content}</div>
  );
};

export default Button;
