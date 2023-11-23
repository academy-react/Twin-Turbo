import { Formik ,Form, Field } from "formik"
import { Button, FieldInput, LinkComponent } from "../common"
import { useRef } from "react"
import customAxios from "../../core/services/interceptor"

const ChangePassword = () => {

    let token = localStorage.getItem("token")

    const ChangePass = (values) => {

        if(values.newPass == values.repeatnewPass) {

            customAxios.post("/SharePanel/ChangePassword",
            {
                oldPassword : values.oldPass,
                newPassword : values.newPass,
            },
            {
                headers : {"Authorization" : "Bearer " + token}
            })

        }
        else {
            alert("رمز مطابقت ندارد")
        }
        
    }

  return (
    <div id='dashBoard' className="w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd] [&>div]:w-[49%] [&>div]:h-[90%] [&>div]:rounded-[25px] flex items-center justify-between px-[30px] mr-2 max-[1350px]:flex-col-reverse max-[1350px]:[&>div]:w-full max-[1350px]:[&>div:first-child]:h-[50%] max-[1023px]:[&>div:first-child]:h-[100%] max-[1350px]:[&>div]:my-2 max-[1020px]:w-full max-[1020px]:rounded-none max-[1020px]:shadow-none max-[1020px]:mr-0 max-[1020px]:bg-transparent max-[1020px]:[&>div]:bg-white max-[1020px]:px-0 max-[1020px]:[&>div]:rounded-none">
        <Formik initialValues={{oldPass:"",newPass:"",repeatnewPass:""}} onSubmit={(values) => ChangePass(values)}  >
            <Form className="h-[550px] border-[red] border w-full flex flex-col items-center justify-center [&>input]:w-[250px] [&>input]:h-[70px] [&>input]:border [&>input]:rounded-[15px] [&>input]:my-[8px] [&>input]:pr-[15px]">

                <Field name="oldPass" placeholder="رمز قدیمی" dir="rtl"  />
                <Field name="newPass" placeholder="رمز جدید" dir="rtl" /> 
                <Field name="repeatnewPass" placeholder="تکرار رمز جدید " dir="rtl" /> 

                <button type="submit" className="w-[150px] h-[50px] bg-[green] rounded-[15px] flex justify-center items-center text-[#fff] mt-[10px]">تغییر رمز عبور</button>
                  
            </Form>
        </Formik>
    </div>
  )
}

export default ChangePassword