import FieldInput from '../common/FieldInput'

const EditProfileItem = ({name,placeholder,border,display,className,dir,content}) => {
  return (
        <div>
            <div>{content}</div>
            <FieldInput name={name} placeholder={placeholder} border={border} display={display} className={className} dir={dir} />
        </div>
  )
}

export default EditProfileItem