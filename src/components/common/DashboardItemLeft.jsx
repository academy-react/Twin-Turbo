const DashboardItemLeft = ({title,course,master,price,src}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="text-[21px] mb-[10px]">{title}</div>
        <div className="w-[90%] border h-[75%] rounded-[15px] flex pr-[10px] items-center justify-center [&>*]:mx-[10px]">
            <div dir="rtl" className="h-full w-[60%] pr-[55px] flex flex-col justify-center text-[20px] [&>div]:my-[6px]">
                <div className="text-[22px]">{course}</div>
                <div className="text-[#777]">{master}</div>
                <div className="text-[#ca5050]">{price}</div>
            </div>
            <img src={"../src/assets/images/" + src} alt="" className="h-[160px] w-[160px] rounded-[50%]" />
        </div>
    </div>
  )
}

export default DashboardItemLeft