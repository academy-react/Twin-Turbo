const Sorts = ({id,htmlFor,text,defaultChecked}) => {
  return (
    <>
        <input type="radio" name="radio" id={id} defaultChecked={defaultChecked} />
        <label htmlFor={htmlFor}>{text}</label>
    </>
  )
}

export default Sorts