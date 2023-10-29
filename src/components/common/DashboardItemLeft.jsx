const DashboardItemLeft = ({title,course,master,price,src}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="text-[21px] mb-[10px]">{title}</div>
        <div className="w-[90%] border h-[75%] rounded-[15px] pr-[10px] flex flex-row-reverse items-center justify-center [&>*]:ml-[10px] max-[1540px]:flex-col">
            <div className="h-[140px] w-[140px] rounded-[50%] overflow-hidden max-[1540px]:w-[91px] mt-2">
              <img src={"../src/assets/images/courses/" + src} alt="" className="h-full w-full" />
            </div>
            <div dir="rtl" className="relative h-full w-[60%] pr-[55px] flex flex-col justify-center max-[1540px]:justify-start text-[20px] [&>div]:my-[6px] max-[1540px]:w-[100%] max-[1540px]:pr-0">
                <div className="text-[22px] max-[1540px]:self-center">{course}</div>
                <div className="text-[#777]  max-[1540px]:absolute max-[1540px]:bottom-16 max-[1540px]:right-2">{master}</div>
                <div className="text-[#36c54e] max-[1540px]:absolute max-[1540px]:text-[16px] max-[1540px]:bottom-2 max-[1540px]:left-2"><span className="text-[#000]">مبلغ : </span>{price} </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardItemLeft