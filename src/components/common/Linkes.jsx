import { NavLink } from 'react-router-dom'
const Linkes = ({src,to,content,className1,className2,hidden}) => {
  return (
    <NavLink to={to} className={({isActive})=> (isActive? className1 : className2)} >

        <img src={"../src/assets/images/dashboard/" + src } alt="" className={"ml-[15px] " + hidden} />
        {content}
    
    </NavLink>
  )
}

export default Linkes