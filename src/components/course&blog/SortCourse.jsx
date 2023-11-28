import { settingSort } from '../map/CoursesMap';

const Sorts = ({id,htmlFor,text,defaultChecked,type,func,sort}) => {
    return (
      <>
          <input type="radio" name="radio" id={id} defaultChecked={defaultChecked} />
          <label htmlFor={htmlFor} data-type={type}   onClick={(e)=> {
            console.log(e.target.getAttribute("data-type"))
            settingSort(e.target.getAttribute("data-type"))
          }} >{text}</label>
      </>
    )
  }
  
  export default Sorts