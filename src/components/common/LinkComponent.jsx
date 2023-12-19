import { Link } from "react-router-dom"
import raiseUp from "../../core/utils/raiseUp.utils"

const LinkComponent = ({content,link,className,bool,modalSearch}) => {
  const showModalSearch = ()=> {
      modalSearch?.current.classList.remove("top-[-150%]");modalSearch?.current.classList.add("top-[0%]")
      Searchinput.focus()
      
    }
  return (
    <Link to={link} className={className} onClick={()=> { bool ? showModalSearch() :  raiseUp(undefined,"",false) }}>{content}</Link>
  )
}

export default LinkComponent