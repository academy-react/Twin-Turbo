import { Formik ,Form, Field } from "formik"
import customAxios from "../../core/services/interceptor"
import { ToastContainer, toast } from "react-toastify"

const ChangePassword = () => {

    let theme = localStorage.getItem("theme")
    const ChangePass = async (values) => {

        if(values.newPass == values.repeatnewPass) {
            try {
                let res = await customAxios.post("/SharePanel/ChangePassword",
                {
                    oldPassword : values.oldPass,
                    newPassword : values.newPass,
                })
                if(res.success) toast.success(res.message)
                else toast.error(res.message)
                
            } catch (error) {
                console.log(error);
                
            }

        }
        else {
            toast.error("رمز مطابقت ندارد")
        }
        
    }

  return (
    <>
        <div id='dashBoard' className="w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd] [&>div]:w-[49%] [&>div]:h-[90%] [&>div]:rounded-[25px] flex items-center justify-between px-[30px] mr-2 max-[1350px]:flex-col-reverse max-[1350px]:[&>div]:w-full max-[1350px]:[&>div:first-child]:h-[50%] max-[1023px]:[&>div:first-child]:h-[100%] max-[1350px]:[&>div]:my-2 max-[1020px]:w-full max-[1020px]:rounded-none max-[1020px]:shadow-none max-[1020px]:mr-0 max-[1020px]:bg-transparent max-[1020px]:[&>div]:bg-white max-[1020px]:px-0 max-[1020px]:[&>div]:rounded-none">
            <Formik initialValues={{oldPass:"",newPass:"",repeatnewPass:""}} onSubmit={(values) => ChangePass(values)}  >
                <Form className="h-[550px] w-full flex flex-col items-center justify-center [&>input]:outline-none [&>input]:w-[400px] [&>input]:h-[70px] [&>input]:border [&>input]:rounded-[15px] [&>input]:my-[8px] [&>input]:pr-[15px]">

                    <Field name="oldPass" placeholder="رمز قدیمی" dir="rtl"  />
                    <Field name="newPass" placeholder="رمز جدید" dir="rtl" /> 
                    <Field name="repeatnewPass" placeholder="تکرار رمز جدید " dir="rtl" /> 

                    <button type="submit" className="w-[400px] h-[70px] bg-[green] text-[20px] rounded-[15px] flex justify-center items-center text-[#fff] mt-[10px]">تغییر رمز عبور</button>
                    <ToastContainer theme={theme} autoClose={4000} position="top-center" limit={2}  /> 
                    
                </Form>
            </Formik>
        </div>
    </>
  )
}

export default ChangePassword