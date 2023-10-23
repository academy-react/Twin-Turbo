import {Field} from 'formik'

const FieldInput = ({as,type,content,name,placeholder,border,display,className,dir}) => {
  return (
    <div dir={dir} className={"relative w-[85%] flex justify-between items-center rounded-lg pr-[15px] overflow-hidden " + border }>

        <Field name={name} as={as} type={type} className={"text-[18px] w-[70%] placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[rgba(112,112,112,0.14)] outline-none rounded-lg h-12 pl-5 " + className } placeholder={placeholder} />
        <div className={"text-[#67008F] transiition-all duration-[.5s] whitespace-nowrap " + display }> {content} </div>

    </div>
  )
}

export default FieldInput