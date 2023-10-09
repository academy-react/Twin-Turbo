import { useNavigate } from "react-router-dom";

const More = ({ className, content , link }) => {
  let navigate = useNavigate()
  return (
    <div onClick={()=> navigate(link)} className={"text-[#6c63ff] border border-[#6c63ff] px-5 py-2 rounded-[14px] cursor-pointer hover:bg-[#6c63ff] hover:text-white transition duration-300 text-[21px] " + className}>{content}</div>
  );
};

export default More;
