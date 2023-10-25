import {Field} from 'formik'
import { useState } from 'react'

const FieldInput = ({as,type,content,name,placeholder,border,display,className,dir,showPasswordCheck}) => {

  const [showPassFlag, setshowPassFlag] = useState(false)

  const showPassword = (e) => {
    if(showPassFlag == false) {
      e.target.previousElementSibling.type = "text"
      e.target.src = "../../src/assets/images/panel/closeView.png"
      setshowPassFlag(true)
    }
    else {
      e.target.previousElementSibling.type = "password"
      e.target.src = "../../src/assets/images/panel/view.svg"
      setshowPassFlag(false)
    }
  }

  return (
    <div dir={dir} className={"relative w-[85%] flex justify-between items-center rounded-lg pr-[15px] overflow-hidden " + border }>

        <Field name={name} as={as} type={type} className={"text-[18px] w-full placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[rgba(112,112,112,0.14)] outline-none rounded-lg h-12 pl-5 " + className } placeholder={placeholder} />
        <img src="../../src/assets/images/panel/view.svg" className={showPasswordCheck == true ? "w-7 ml-3" : "hidden"} onClick={(e)=> showPassword(e)} />
        <div className={"text-[#67008F] transiition-all duration-[.5s] whitespace-nowrap " + display }> {content} </div>

    </div>
  )
}

export default FieldInput