import Button from "./Button";

const ItemNews = ({ img1, img2, img3 }) => {
  return (
    <>
      <div className="w-[95%] h-[28%] border-b border-[#ccc] flex justify-around items-center px-[15px] ">
        <p className="text-[#888] text-[20px]">
          آموزشگاه در تدارک دوره های جدید برنامه نویسی است
        </p>
        <img
          src={"../src/assets/images/" + img1}
          alt=""
          className="w-[130px] h-[90%] rounded-[15px] "
        />
      </div>
      <div className="w-[95%] h-[28%]  border-b border-[#ccc] flex justify-around items-center px-[15px] ">
        <p className="text-[#888] text-[20px]">
          آموزشگاه در تدارک دوره های جدید برنامه نویسی است
        </p>
        <img
          src={"../src/assets/images/" + img2}
          alt=""
          className="w-[130px] h-[90%] rounded-[15px] "
        />
      </div>
      <div className="w-[95%] h-[28%] flex justify-around items-center px-[15px] ">
        <p className="text-[#888] text-[20px]">
          آموزشگاه در تدارک دوره های جدید برنامه نویسی است
        </p>
        <img
          src={"../src/assets/images/" + img3}
          alt=""
          className="w-[130px] h-[90%] rounded-[15px] "
        />
      </div>
      <Button
        content="بیشتر"
        className="absolute left-2 bottom-2 px-[14px] py-1"
      />
    </>
  );
};

export default ItemNews;
