import { Link } from "react-router-dom"
import raiseUp from "../../core/utils/raiseUp.utils"

const LinkComponent = ({content,link,className}) => {
  return (
    <Link to={link} className={className} onClick={()=> raiseUp(undefined,"",false)}>{content}</Link>
  )
}

export default LinkComponent