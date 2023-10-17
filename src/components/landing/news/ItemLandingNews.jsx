import Button from "../../common/Button";

const ItemLandingNews = ({ image}) => {
  return (
    <>
      <div className="w-[95%] h-[23%] whitespace-nowrap border-b border-[#ccc] flex justify-around items-center px-[15px] max-[1400px]:[&>p]:text-[12px] max-[600px]:w-full">
          <p className="text-[#888] text-[20px] max-[600px]:hidden">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
          <img src={"../src/assets/images/courses/" + image} alt="" className="max-[600px]:w-[150px] w-[130px] h-[90%] rounded-[15px] "/>
      </div>
      <Button content="بیشتر" className="absolute left-2 bottom-2 scale-[80%]" link="/blogs" />
    </>
  )
}

export default ItemLandingNews