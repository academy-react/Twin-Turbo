import { useParams } from 'react-router-dom'

const CommentMap = ({db}) => {
    let url = useParams()
    

    let finded = db.find((el)=> {
        return el.id == url.id
    })

    return (
        finded.comment.map((element,index)=> {

            return (
                <div key={index} className="w-full flex items-center gap-[15px] my-[7px] py-5">
                    <img src={"../src/assets/images/" + element.src} alt="" className="w-16 h-16 rounded-full" />
                    <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                        <span className="text-[17px]">{element.name}  |  {element.time} ساعت پیش</span>
                        <p className="text-[#707070] text-[15px]">{element.comment}</p>
                        <div className="w-[110px] h-[25px] flex justify-evenly items-center">
                            <div className="flex items-center cursor-pointer" >
                                <span className="text-[#37c54f]">{element.like}</span>
                                <img src="../src/assets/images/like.png" className="mx-2" /> 
                            </div>
                            |
                            <div className="flex items-center cursor-pointer mr-2" >
                                <span className="text-[#ec0b1a]">{element.dislike}</span> 
                                <img src="../src/assets/images/dislike.png" className="mr-2" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[40px] absolute left-[50px] bottom-[10px]" >
                            <img src="../src/assets/images/selectedCourse/reply.png" className='scale-[60%]'  />
                            <img src="../src/assets/images/selectedCourse/warning.png" className='scale-[60%]' />
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CommentMap