import React from 'react'
import Button from "../components/common/Button";

const ItemNews = ({img1,img2,img3}) => {
  return (
    <>
        <div className="w-[95%] h-[26%] border-b border-[#ccc] flex justify-around items-center flex-row-reverse px-[15px] ">
              <img src={"../src/assets/images/" + img1} alt="" className="w-[110px] h-[80%] rounded-[15px] " />
              <p className="text-[#888]">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
        </div>
        <div className="w-[95%] h-[26%]  border-b border-[#ccc] flex justify-around items-center flex-row-reverse px-[15px] ">
              <img src={"../src/assets/images/" + img2} alt="" className="w-[110px] h-[80%] rounded-[15px] " />
              <p className="text-[#888]">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
        </div>
        <div className="w-[95%] h-[26%] flex justify-around items-center flex-row-reverse px-[15px] ">
              <img src={"../src/assets/images/" + img3} alt="" className="w-[110px] h-[80%] rounded-[15px] " />
              <p className="text-[#888]">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
        </div>
        <Button content="بیشتر" className="absolute left-2 bottom-2 px-[14px] py-1" />

    </>
  )
}

export default ItemNews