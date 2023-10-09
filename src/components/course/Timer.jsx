import { useEffect, useState } from "react";

const Timer = ({month , day , hour , minute , second}) => {

    let [secondState, setSecondState] = useState(second)
    let [minuteState, setMinuteState] = useState(minute)
    let [hourState, setHourState] = useState(hour)
    let [dayState, setDayState] = useState(day)
    let [monthState, setMonthState] = useState(month)

        
    useEffect(() => {
      let countDown = setTimeout(() => {
        setSecondState(secondState - 1)
        if(secondState == 0) {
            setSecondState(59)
            setMinuteState(minuteState - 1)
        }
        if(minuteState == 0 && secondState == 0) {
            setMinuteState(59)
            setHourState(hourState - 1)
        }
        if(hourState == 0 && minuteState == 0) {
            setHourState(23)
            setDayState(dayState - 1)
        }
        if(dayState == 0 && hourState == 0) {
            setDayState(30)
            setMonthState(monthState - 1)
        }
        if(monthState == 0) clearInterval(countDown)
      }, 1000);
    }, [secondState])
    

    
    
  return (
    <>
      <div className="self-center text-[20px] m-2">مهلت استفاده از تخفیف</div>
      <div className="flex justify-around items-center h-32 [&>div]:w-[70px] [&>div]:h-20 [&>div]:rounded-3xl  [&>div]:bg-[#f5f5f5] [&>div]:flex  [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div]:text-[#444]">
        <div>
          <div className="text-[22px]">{monthState}</div>
          <div>ماه</div>
        </div>
        <div>
          <div className="text-[22px]">{dayState}</div>
          <div>روز</div>
        </div>
        <div>
          <div className="text-[22px]">{hourState}</div>
          <div>ساعت</div>
        </div>
        <div>
          <div className="text-[22px]">{minuteState}</div>
          <div>دقیقه</div>
        </div>
        <div>
          <div className="text-[22px]">{secondState}</div>
          <div>ثانیه</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
