import { useState } from 'react'
import { useParams } from 'react-router-dom'

const CommentMap = ({db}) => {
    let url = useParams()
    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)
    let finded = db.find((el)=> el.id == url.id)

    const likeUp = (e) => {

        if(!disLike) {
            let num = e.target.getAttribute("data-id")
            db[url.id-1].comment[num].like = db[url.id-1].comment[num].like + 1
            num = Math.ceil(e.target.parentNode.children[0].innerHTML) + 1
            e.target.parentNode.children[0].innerHTML = num;
            setLike(true)
        }


    }
    const likeDown = (e) => {
        if(!disLike){
            let num = e.target.getAttribute("data-id")
            db[url.id-1].comment[num].like = db[url.id-1].comment[num].like - 1
            num = Math.ceil(e.target.parentNode.children[0].innerHTML) - 1
            e.target.parentNode.children[0].innerHTML = num;
            setLike(false) 
        }


    }
    const disLikeUp = (e) => {

        if(!like) {
            let num = e.target.getAttribute("data-id")
            db[url.id-1].comment[num].dislike = db[url.id-1].comment[num].dislike + 1
            num = Math.ceil(e.target.parentNode.children[0].innerHTML) + 1
            e.target.parentNode.children[0].innerHTML = num;
            setDisLike(true)
        }
        


    }
    const disLikeDown = (e) => {
        if(!like){
            let num = e.target.getAttribute("data-id")
            db[url.id-1].comment[num].dislike = db[url.id-1].comment[num].dislike - 1
            num = Math.ceil(e.target.parentNode.children[0].innerHTML) - 1
            e.target.parentNode.children[0].innerHTML = num;
            setDisLike(false)
        }
        


    }

    return (
        finded.comment.map((element,index)=> {

            return (
                <div key={index} className="w-full flex items-center gap-[15px] my-[7px] py-5 " data-id="1" >
                    <img src={"../src/assets/images/" + element.src} alt="" className="w-16 h-[60px] rounded-full " />
                    <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                        <div className="text-[18px] my-1">{element.name}  |  {element.time} ساعت پیش</div>
                        <p className="text-[#707070] text-[15px] my-1 inline-block">{element.comment}</p>
                        <div className="w-[110px] h-[25px] flex justify-evenly items-center my-1">
                            <div className=" flex items-center"  >
                                <span className="text-[#37c54f]">{element.like}</span>
                                <img src="../src/assets/images/like.png" className="mx-2 cursor-pointer" data-id={`${index}`} onClick={(e)=> !like ? likeUp(e) : likeDown(e)} /> 
                            </div>
                            |
                            <div className="flex items-center mr-2" >
                                <span className="text-[#ec0b1a]">{element.dislike}</span> 
                                <img src="../src/assets/images/dislike.png" className="mr-2 cursor-pointer" data-id={`${index}`} onClick={(e)=> !disLike ? disLikeUp(e) : disLikeDown(e)}/>
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