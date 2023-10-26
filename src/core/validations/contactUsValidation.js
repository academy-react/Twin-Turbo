import * as yup from 'yup'

let validation = yup.object().shape({
    name : yup.string("DEefesfefsfesefsef").required("Please enter the name"),
    email : yup.string().email("لطفا ایمیل را به درستی وارد کنید").matches(/^[\w-\.]+@([gmail-]+\.)+[com-]{2,4}$/ , "لطفا ایمیل را به درستی وارد کنید").required("لطفا ایمیل را وارد کنید"),
    phone : yup.number().required("Please enter the phone number"),
    textarea : yup.string().required("Please enter the text"),
})

export default validation