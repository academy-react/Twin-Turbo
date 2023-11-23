
const ItemLandingNews = ({ image }) => {
  return (
    <>
      <div dir="rtl" className="dark:bg-gradient-to-l from-[#182239] to-[#314062] w-[95%] h-[120px] px-5 rounded-xl shadow-[0_-5px_5px_#dddf] max-[600px]:my-2 flex flex-row-reverse justify-around items-center max-[1400px]:[&>p]:text-[18px] max-[600px]:flex-col-reverse max-[600px]:h-[145px]">
          <p className="dark:text-[#fff] text-[#888] text-[20px] mx-3 max-[600px]:truncate max-[600px]:w-[100%]">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
          <img src={"../src/assets/images/courses/" + image} alt="" className="w-[150px] h-[100px] rounded-[15px] ml-5 mt-2"/>
      </div>
    </>
  )
}

export default ItemLandingNews