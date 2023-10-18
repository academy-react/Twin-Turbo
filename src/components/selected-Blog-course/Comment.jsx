import CommentMap from '../map/CommentMap'
const CommentBlog = ({db}) => {

    return (
        <>
            <div className="w-full bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10">
            <div dir="rtl" className="h-full flex flex-col p-[25px] leading-[28px] [&>*]:my-[7px]">
                <CommentMap db={db} />
                <textarea placeholder="نوشتن پیام" className="w-full h-[400px] bg-white shadow-[0_0_7px_#999] rounded-[15px] resize-none outline-none p-[10px] text-[18px]"></textarea>
                <button className="bg-[#36C54E] rounded-[15px] w-full h-[55px] flex justify-center items-center text-[#fff] text-[21px] transition-all duration-500 hover:bg-[#34a647]">ارسال متن</button>
            </div>
        </div>
        </>
    )
}

export default CommentBlog