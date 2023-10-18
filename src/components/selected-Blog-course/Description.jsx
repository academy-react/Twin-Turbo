const DescriptionBlog = ({text , title}) => {
  
  return (
    <>
      <div className="w-full h-[650px] bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10 py-[25px]">
        <h1 className="text-[26px] text-[#5A0BA9] mr-5">توضیحات {title} : </h1>
        <p dir="rtl" className="p-[30px] leading-[28px] text-[18px]">
          { text }
        </p>
        <div className="w-full h-[50px] flex justify-between items-center pl-[15px] absolute bottom-0 left-0">
            <img src="../src/assets/images/star.png" alt="" className="scale-[80%]" />
            <p className="text-[#707070]">12  مهر  1402</p>
        </div>
      </div>
    </>
  );
};

export default DescriptionBlog;
