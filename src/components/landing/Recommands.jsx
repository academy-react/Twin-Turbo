import TitleComponents from "./TitleComponents"
import {Form,Formik,Field , ErrorMessage} from 'formik'
import { FieldInput , Submit} from "../../components/common"
import recommandsValidation from "../../core/validations/recommandsValidation"
import recommandsSubmit from "../../core/validations/submit/recommandsSubmit"

const Recommands = () => {
  return (
    <div className='w-full h-[870px] flex flex-col justify-center items-center pt-[10px] relative mb-[100px] max-[480px]:mb-[-50px]'>
        <TitleComponents title="نظر خواهی" content="نظرات و انتقادات" src="courses-title.png" className="flex max-[1170px]:mb-16 top-[15px] max-[710px]:mb-0 max-[700px]:scale-[90%] " />

        <Formik initialValues={{name:"",email:"",textarea:"",bool:false}} onSubmit={(values)=> recommandsSubmit(values)} validationSchema={recommandsValidation}>
            <Form className="w-full relative h-[65%] mt-28 max-[1510px]:mt-5 max-[1170px]:flex justify-center max-[710px]:mb-16 max-[500px]:mb-0">
                <img src="../src/assets/images/landingRec/re-i.png" className="h-full relative max-[1630px]:left-[-45px] max-[1630px]:scale-[90%] transition-all duration-1000 max-[1510px]:left-[-94px] max-[1510px]:scale-[80%] max-[1510px]:h-[85%] max-[1510px]:top-20 max-[1170px]:hidden" />
                <img src="../src/assets/images/landingService/Path 620.png" alt="" className='hidden max-[1170px]:inline-block absolute left-[-250px] top-[-150px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[855px]:scale-[40%] max-[855px]:top-[-180px] max-[710px]:hidden' id="recommandsPath"/>
                <img src="../src/assets/images/landingRec/rec-icon.png" className="hidden w-40 max-[1170px]:inline-block absolute right-0 bottom-0 max-[710px]:bottom-[-155px] max-[500px]:hidden" />
                <div className="mt-[-25px] py-4 w-[600px] shadow-[0_0_7px_#ddd] opacity-0 bg-white absolute right-24 top-0 rounded-3xl flex flex-col items-center justify-evenly transition-all duration-1000 max-[1630px]:scale-[90%] max-[1510px]:scale-[80%] max-[1510px]:w-[550px] max-[1170px]:relative max-[1170px]:left-[5px] max-[777px]:scale-[70%] max-[650px]:w-[700px]" id="recommandsForm">

                    <FieldInput name="name" content="نام کاربری" placeholder="user name" border="border"/>

                    <FieldInput name="email" content="ایمیل" placeholder="enter your email address" border="border"/>
                    
                    <div className="relative w-full flex justify-center">
                        <Field name="textarea" type="text" as="textarea" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707023] outline-none rounded-lg w-[85%] h-80 pl-5 pt-10 px-[5px] resize-none" />
                        <div className="text-[20px] text-[#67008F] absolute right-[58px] top-3 transiition-all duration-[.5s]">متن پیام</div>
                    </div>
                    <div className="self-end mr-14 h-6" >
                        <ErrorMessage component={"div"} name="textarea" className='text-[#B00020] text-[18px] ErrorMessage' />
                    </div>
                    <Submit content="ارسال" data="موفقیت" className="w-[85%] h-12 mb-[15px]" />
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Recommands