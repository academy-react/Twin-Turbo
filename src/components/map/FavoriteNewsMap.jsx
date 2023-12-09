import { useEffect, useState } from "react"
import customAxios from "../../core/services/interceptor"

const FavoriteNewsMap = () => {

    const [favoriteNews, setFavoriteNews] = useState()

    const getFavoriteNews = async () => {
        let result = await customAxios.get("/SharePanel/GetMyFavoriteNews")
        setFavoriteNews(result.myFavoriteNews)
        console.log(result.myFavoriteNews);
        
    }

    const handelDeleting = async (element) => {
        await customAxios.delete("/News/DeleteFavoriteNews",{
            data : {deleteEntityId : element.favoriteId}
        });
        getFavoriteNews()
    }



    useEffect(() => {getFavoriteNews()}, [])
    
    return (
        favoriteNews?.map((element,index)=> {
            return (
                <div key={index} className='max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                    <img src="../src/assets/images/dashboard/Recycle Bin.png" alt="" className='w-[30px] cursor-pointer' onClick={()=> handelDeleting(element)}/>
                    <img src="../src/assets/images/panel/view.svg" alt="" className='w-[30px] cursor-pointer' onClick={()=> goToCourse(element)}/>
                    
                    <span dir='rtl'>{element.currentRate}</span>
                    <span dir='rtl'>{element.updateDate.slice(0,10)}</span>
                    <span dir='rtl'>{element.currentLikeCount} پسندیده</span>
                    <span dir='rtl'> {element.currentView} نفر</span>
                    <span dir='rtl'>{element.title.slice(0,10)}</span>
                    

                    

                    <img src={element?.tumbImageAddress !== null ? element?.tumbImageAddress : "../src/assets/images/courses/03.png"} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
                </div>
            )
        })

    )
}

export default FavoriteNewsMap