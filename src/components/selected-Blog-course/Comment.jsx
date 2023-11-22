import { Formik, Form ,Field, ErrorMessage } from 'formik'
import CommentMap from '../map/CommentMap'
import { useLocation, useParams } from 'react-router-dom'
import customAxios from '../../core/services/interceptor'

const CommentBlog = ({db}) => {
    let url = useParams()
    let location = useLocation()
    let token = localStorage.getItem("token")

    const addCommentBlog = async (value) => {
        customAxios.post("/News/CreateNewsComment",{
            newsId: url.id,
            title: "Hamid",
            describe: value.comment
        },{
            headers : {"Authorization" : "Bearer " + token}
        })
    } 

    const addCommentCourse= async (value) => {
        let formData = new FormData()

        formData.append("CourseId", url.id)
        formData.append("Title", "Hamid")
        formData.append("Describe", value.comment)

        customAxios.post("/Course/AddCommentCourse",formData,{
            headers : {"Authorization" : "Bearer " + token}
        })
    } 

    const handle = (value)=> { 

        if(location.pathname.indexOf("/blogs") !== -1)  {
            addCommentBlog(value)
        }  
        else if(location.pathname.indexOf("/courses") !== -1) {
            addCommentCourse(value)
        }   

    }
    
    return (
        <>
            <Formik initialValues={{comment : ""}} onSubmit={(value)=> handle(value)} >
                <Form>
                    <div className="w-full bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10">
                        <div dir="rtl" className="h-full flex flex-col p-[25px] leading-[28px] [&>*]:my-[7px]">
                            <CommentMap db={db} />
                            <Field as="textarea" name="comment" placeholder="نوشتن پیام" className="w-full h-[400px] bg-white shadow-[0_0_7px_#999] rounded-[15px] resize-none outline-none p-[10px] text-[18px]" />
                            <div className="h-6">
                                <ErrorMessage component="div" name="comment" className='text-[#B00020] ErrorMessage' />
                            </div>
                            <button type="submit" className="bg-[#36C54E] rounded-[15px] w-full h-[55px] flex justify-center items-center text-[#fff] text-[21px] transition-all duration-500 hover:bg-[#34a647]">ارسال متن</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default CommentBlog