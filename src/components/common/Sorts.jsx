const Sorts = ({id,htmlFor,text,defaultChecked,type,func,sort}) => {
  return (
    <>
        <input type="radio" name="radio" id={id} defaultChecked={defaultChecked} />
        <label htmlFor={htmlFor} data-type={type}   onClick={(e)=> func(e)} >{text}</label>
    </>
  )
}

export default Sorts