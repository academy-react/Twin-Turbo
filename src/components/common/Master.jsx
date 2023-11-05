const Master = ({name,ability,src}) => {
  return (
    <div className="w-[340px] scale-[107%] h-[120px] border my-7 rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8 bg-white">
        <img src={"../src/assets/images/landingMaster/" + src } alt="" className="h-[90px] w-[90px] absolute right-[8px] top-[-35px] rounded-[15px] max-[1023px]:top-[15px] max-[700px]:scale-[85%]"/>
        <p className="text-[22px] mb-2 max-[650px]:text-[18px]" >{name}</p>
        <p className="text-[17px] text-[#444] ml-[13px] max-[650px]:text-[14px]">{ability}</p>
    </div>
  )
}

export default Master