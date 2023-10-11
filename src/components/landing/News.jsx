import ItemNews from "./ItemNews";

const News = () => {
  return (
    <div className="w-full h-[650px] flex flex-col items-center justify-around">
      <div className="w-[32%] h-[180px] relative">
        <img
          src="../src/assets/images/Group 135.png"
          alt=""
          className="w-full h-full"
        />
        <p className="text-[#5a0ba9] absolute top-[25%] right-[38%] text-[24px]">
          اخبار و مقالات
        </p>
      </div>
      <div className="w-[95%] h-[350px] flex">
        <div className="h-full w-[50%] bg-white shadow-[0_0_7px_#ccc] mx-3 rounded-[15px] relative flex justify-center items-center flex-col">
          <div className="absolute top-[-25px] right-[-15px] p-2 w-16 text-center shadow-[0_0_7px_#ccc] bg-white rounded-[15px]">
            اخبار
          </div>
          <ItemNews img1="git.jpg" img2="bootstrap.jpg" img3="web.jpg" />
        </div>

        <div className="h-full w-[50%] bg-white shadow-[0_0_7px_#ccc] mx-3 rounded-[15px] relative flex justify-center items-center flex-col">
          <div className="absolute top-[-25px] right-[-15px] p-2 w-16 text-center shadow-[0_0_7px_#ccc] bg-white rounded-[15px]">
            مقالات
          </div>
          <ItemNews img1="web.jpg" img2="git.jpg" img3="bootstrap.jpg" />
        </div>
      </div>
      <div
        dir="rtl"
        className="w-[32%] h-[55px] border border-[#ccc] my-3 rounded-[15px] flex justify-between items-center overflow-hidden pr-6"
      >
        <p className="text-[#5a0ba9]">عضویت در خبرنامه : </p>
        <input
          dir="ltr"
          type="text"
          className="w-[70%] h-full border-none outline-none placeholder:text-[#5a0ba951] text-[#5A0BA9] px-3 bg-[#f5f5f5] text-[18px]"
          placeholder="enter your email address"
        />
      </div>
    </div>
  );
};

export default News;
