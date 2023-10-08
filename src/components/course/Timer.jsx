import { useEffect, useState } from "react";

const Timer = ({month , day , hour , minute , second}) => {
    let [seconds, setseconds] = useState(second)
    
    
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("d");
    //         setseconds(seconds --)
    //     }, 1000);
    // }, [seconds])
    
  return (
    <>
      <div className="self-center text-[20px] m-2">مهلت استفاده از تخفیف</div>
      <div className="flex justify-around items-center h-32 [&>div]:w-[70px] [&>div]:h-20 [&>div]:rounded-3xl  [&>div]:bg-[#f5f5f5] [&>div]:flex  [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div]:text-[#444]">
        <div>
          <div className="text-[22px]">{month}</div>
          <div>ماه</div>
        </div>
        <div>
          <div className="text-[22px]">{day}</div>
          <div>روز</div>
        </div>
        <div>
          <div className="text-[22px]">{hour}</div>
          <div>ساعت</div>
        </div>
        <div>
          <div className="text-[22px]">{minute}</div>
          <div>دقیقه</div>
        </div>
        <div>
          <div className="text-[22px]">{seconds}</div>
          <div>ثانیه</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
