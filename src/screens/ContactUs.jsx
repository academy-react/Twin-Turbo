import {Header,Footer} from '../components/common'
import {Form,Formik,Field,ErrorMessage} from 'formik'

const ContactUs = () => {

    const log = (value)=> {
        console.log(value);
    }

    return (
        <div className='w-[1920px] mx-[auto] max-[1920px]:w-full'>
            <Header src="avatar.png" color="#5A0BA9" />
                <div className='w-[80%] mx-auto flex items-center justify-around max-[1260px]:flex-wrap my-10'>
                    
                    <Formik initialValues={{name:"",email:"",phone:"",textarea:""}} onSubmit={(values)=> log(values)}>
                        <Form className="w-[600px] h-[750px] shadow-[0_0_7px_#ddd] bg-white rounded-3xl flex flex-col items-center justify-evenly transition-all duration-1000" id="recommandsForm">
                            <div className="text-[30px]">تماس با ما</div>
                            <div className="relative w-[85%] flex justify-between items-center border rounded-lg pr-[15px] overflow-hidden">
                                <Field name="name" type="text" className="text-[18px] w-[70%] placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[#70707023] outline-none rounded-lg h-12 pl-5" placeholder="name"/>
                                <div className="text-[20px] text-[#67008F] transiition-all duration-[.5s]">نام و نام خانوادگی</div>
                            </div>
                            <div className="relative w-[85%] flex justify-between items-center border rounded-lg pr-[15px] overflow-hidden">
                                <Field name="email" type="text" className="text-[18px] w-[75%]  placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[#70707023] outline-none  h-12 pl-5" placeholder="enter your email address"/>
                                <div className="text-[20px] text-[#67008F] transiition-all duration-[.5s]">ایمیل</div>
                            </div>
                            <div className="relative w-[85%] flex justify-between items-center border rounded-lg pr-[15px] overflow-hidden">
                                <Field name="phone" type="text" className="text-[18px] w-[75%]  placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[#70707023] outline-none  h-12 pl-5" placeholder="phone call"/>
                                <div className="text-[20px] text-[#67008F] transiition-all duration-[.5s]">شماره موبایل</div>
                            </div>
                            <div className="relative w-full flex justify-center">
                                <Field type="textarea" name="textarea" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707023] outline-none rounded-lg w-[85%] h-60 pl-5 pt-10 px-[5px] resize-none"/>
                                <div className="text-[20px] text-[#67008F] absolute right-[58px] top-3 transiition-all duration-[.5s]">متن پیام</div>
                            </div>
                            <button type='submit' className='w-[89%] h-16 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px] hover:bg-[#38b24c] transition-all duration-300'>
                                ارسال پیام
                            </button>
                        </Form>
                    </Formik>
                        
                    <ul className="min-w-[450px] h-[500px] flex flex-col justify-around items-end self-start transition-all duration-1000 max-[1300px]:scale-[90%] max-[640px]:scale-[80%] max-[640px]:mt-[-50px] max-[640px]:m-[-100px] max-[340px]:mt-[-150px] max-[400px]:scale-[70%] max-[400px]:mr-[-30px]">
                        <li className="flex items-center ">
                            <div className="flex flex-col items-end">
                                <div className="text-[24px] text-[#666]">تماس بگیرید</div>
                                <div className="text-[18px] text-[#aaa]">09336669933</div>
                            </div>
                            <img src="../src/assets/images/contactUs/call.png" alt="" className="ml-5" />
                        </li>
                        <li className="flex items-center">
                            <div className="flex flex-col items-end">
                                <div className="text-[24px] text-[#666]">مکاتبه ایمیلی</div>
                                <div className="text-[18px] text-[#aaa]" dir="rtl">asgharpalang@gmail.com از طریق ایمیل</div>
                            </div>
                            <img src="../src/assets/images/contactUs/message.png" alt="" className="ml-5" />
                        </li>
                        <li className="flex items-center">
                            <div className="flex flex-col items-end">
                                <div className="text-[24px] text-[#666]">ساعت کاری</div>
                                <div className="text-[18px] text-[#aaa]">شنبه تا چهارشنبه 10 تا 20</div>
                                <div className="text-[18px] text-[#aaa]">پنجشنبه ها 8 تا 12</div>
                            </div>
                            <img src="../src/assets/images/contactUs/time.png" alt="" className="ml-5" />
                        </li>
                        <li className="flex items-center">
                            <div className="flex flex-col items-end">
                                <div className="text-[24px] text-[#666]">نشانی</div>
                                <div className="text-[18px] text-[#aaa]">ساری خیابان فرهنگ روبروی حافظ</div>
                            </div>
                            <img src="../src/assets/images/contactUs/location.png" alt="" className="ml-5" />
                        </li>
                    </ul>

                </div>
            <Footer />
        </div>
    )

}

export default ContactUs