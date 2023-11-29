import ReactStars from "react-stars";

const DescriptionBlog = ({text , title , date , currentRate}) => {

  return (
    <>
      <div className="w-full h-[650px] bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10 py-[25px]">
        <h1 className="text-[26px] text-[#5A0BA9] mr-5">توضیحات {title} : </h1>
        <p dir="rtl" className="p-[30px] leading-[28px] text-[18px]">
          { text }
        </p>
        <div className="w-full h-[50px] flex justify-between items-center pl-[15px] absolute bottom-0 left-0 px-2">
            <div className="flex items-center justify-between text-[#888]">
              <ReactStars size={30} color2="#ffbb1b" value={currentRate} half={true} edit={false} />
              <span className="mr-2">{currentRate}</span>
            </div>
            <p className="text-[#707070]"> {date.slice(0,10).replace("-","/").replace("-","/")} </p>
        </div>
      </div>
    </>
  );
};

export default DescriptionBlog;
