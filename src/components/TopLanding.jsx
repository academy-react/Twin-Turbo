import Header from "./common/Header";

const TopLanding = () => {
  return (
    <div className="w-full h-[830px] relative ">
      <img
        src="../src/assets/images/bg-top.png"
        alt=""
        className="w-full h-full absolute left-0 -top-[2px] scale-x-[107%] scale-y-[117%] -z-10"
      />
      <img
        src="../src/assets/images/woman.png"
        alt=""
        className="absolute scale-[72%] left-[-10px] top-[80px] -z-10"
      />
      <Header  src="avatar.png" color="#5A0BA9" />
      <h1 className="absolute right-[245px] top-[270px]  text-[36px] text-[#666]">
        پژوهشگاه سپهر
      </h1>
      <p
        className="absolute right-[200px] top-[340px] text-[20px] w-[600px] text-[#777]"
        dir="rtl"
      >
        پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت اموزشی و همچنین
        آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
        بتوانیم با راه کار های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت
        کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند
      </p>
      <button className="bg-gradient-to-r from-[#5A0BA9] to-[#C003B2] hover:bg-gradient-to-l rounded-[25px] h-[55px]  px-10 whitespace-nowrap absolute right-[200px] text-[19px] top-[500px] text-[#fff]">
        شروع یادگیری
      </button>
    </div>
  );
};

export default TopLanding;
