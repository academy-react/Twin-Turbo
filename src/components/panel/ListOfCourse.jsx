const ListOfCourse = () => {
  return (

    <div className="w-[73%] border border-[green]">


        <div className="h-[15%] border-[red] border [&>div]:h-full [&>div]:w-[35%] flex justify-between">

            <div className="flex justify-center items-center"> 
            
                <div className="bg-[#EEE6F6] w-[75%] h-[40%] rounded-[50px] flex items-center justify-around overflow-hidden px-[10px]">
                    <img src="../src/assets/images/header/search.png" alt="" className=" w-[40px] h-[40px]" />
                    <input dir="rtl" type="text" className="w-[75%] h-full border-none outline-none bg-[#EEE6F6] placeholder:text-[#7F42BC] text-[#7F42BC]" placeholder="جستجو"/>
                </div>

            </div>
            <div dir="rtl" className="flex items-center px-[15px]">
                <span>دوره های ثبت شده : 36 از 36</span>
            </div>

        </div>
        <div className="h-[85%] border-[red] border m-[25px] mt-[0]"></div>


    </div>

  )
}

export default ListOfCourse