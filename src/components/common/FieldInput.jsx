import {Field,ErrorMessage} from 'formik'
import showPassword from '../../core/utils/showPassword.utils'

const FieldInput = ({as,type,content,name,placeholder,border,display,className,dir,showPasswordCheck}) => {
  return (
    <>
        <div dir={dir} className={"relative w-[85%] flex justify-between items-center rounded-lg pr-[15px] overflow-hidden " + border }>

          <Field name={name} as={as} type={type} className={"text-[18px] w-full placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[rgba(112,112,112,0.14)] outline-none rounded-lg h-12 pl-5 " + className } placeholder={placeholder} />
          <img src="../../src/assets/images/panel/view.svg" className={showPasswordCheck == true ? "w-7 ml-3 cursor-pointer" : "hidden"} onClick={(e)=> showPassword(e)} />
          <div className={"text-[#67008F] transiition-all duration-[.5s] whitespace-nowrap " + display }> {content} </div>
        
        </div>
        <div className="self-end mr-14 h-7">
          <ErrorMessage component="div" name={name} className='text-[#B00020] ErrorMessage' />
        </div>
    </>

  )
}

export default FieldInput