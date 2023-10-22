import ListCousePanelMap from '../map/ListCousePanelMap' 

const ListOfCourse = () => {
  return (

    <div className="w-[73%] bg-white rounded-3xl shadow-[0_0_7px_#ddd]">


        <div className="h-[15%] [&>div]:h-full [&>div]:w-[35%] flex justify-between ">

            <div className="flex justify-center items-center"> 
            
                <div className="bg-[#EEE6F6] w-[75%] h-[40%] rounded-[50px] flex items-center justify-around overflow-hidden pr-[10px]">
                    <img src="../src/assets/images/header/search.png" alt="" className=" w-[30px] h-[30px]" />
                    <input dir="rtl" type="text" className="w-[75%] h-full border-none outline-none bg-[#EEE6F6] placeholder:text-[#7F42BC] text-[#7F42BC]" placeholder="جستجو"/>
                </div>

            </div>
            <div dir="rtl" className="flex items-center px-[15px]">
                <span>دوره های ثبت شده : 36 از 36</span>
            </div>

        </div>
        <div className="h-[85%] m-[25px] mt-[0] bg-[#f1f1f1] rounded-[25px]">
            <div className="w-[75%] h-[15%]  flex justify-around items-center mx-[auto]">
                <span>قیمت</span>
                <span>تاریخ پایان</span>
                <span>تاریخ شروع</span>
                <span>نام ترم</span>
                <span>نام استاد</span>
                <span>نام دوره</span>
            </div>
            <div className="h-[85%] mx-auto px-[15px]">
                <ListCousePanelMap />
            </div>
        </div>


    </div>

  )
}

export default ListOfCourse