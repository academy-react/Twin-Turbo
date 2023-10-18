import TitleComponents from "./TitleComponents"
import {Form,Formik,Field,ErrorMessage} from 'formik'
import FieldInput from "../../components/common/FieldInput"
const Recommands = () => {
  return (
    <div className='w-full h-[870px] flex flex-col justify-center items-center pt-[10px] relative mb-[100px]'>
        <TitleComponents title="نظر خواهی" content="نظرات و انتقادات" src="courses-title.png" className="flex" />


        <Formik initialValues={{name:"",email:"",textarea:""}} onSubmit={(values)=> console.log(values)}>
            <Form className="w-full relative h-[65%] mt-28">
                <img src="../src/assets/images/re-i.png" className="h-full relative max-[1630px]:left-[-45px] max-[1630px]:scale-[90%] transition-all duration-1000 max-[1510px]:left-[-94px] max-[1510px]:scale-[80%] max-[1510px]:h-[85%] max-[1510px]:top-20 max-[1170px]:hidden" />
                <div className="w-[600px] shadow-[0_0_7px_#ddd] h-0 opacity-0 bg-white absolute right-24 top-0 rounded-3xl flex flex-col items-center justify-evenly transition-all duration-1000 max-[1630px]:scale-[90%] max-[1510px]:scale-[80%] max-[1510px]:w-[550px] max-[1170px]:relative max-[1170px]:left-0 max-[1170px]:mx-auto max-[530px]:scale-[70%] max-[530px]:left-[-50px] max-[480px]:scale-[60%] max-[480px]:left-[-80px] max-[378px]:w-[480px]" id="recommandsForm">
                    <FieldInput name="name" content="نام کامل" placeholder="name" border="border"/>

                    <FieldInput name="email" content="ایمیل" placeholder="enter your email address" border="border"/>
                    
                    <div className="relative w-full flex justify-center">
                        <Field name="textarea" type="text" as="textarea" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707023] outline-none rounded-lg w-[85%] h-80 pl-5 pt-10 px-[5px] resize-none" />
                        <div className="text-[20px] text-[#67008F] absolute right-[58px] top-3 transiition-all duration-[.5s]">متن پیام</div>
                    </div>
                    <button type="submit" className='w-[85%] h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px]'>
                        ارسال
                    </button>
                </div>
            </Form>
        </Formik>
        

    </div>
  )
}

export default Recommands