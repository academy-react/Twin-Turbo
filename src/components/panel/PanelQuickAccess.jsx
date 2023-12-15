import { useLocation, useNavigate } from "react-router-dom"
import { Linkes } from "../common"
import raiseUp from '../../core/utils/raiseUp.utils'
import { useDispatch, useSelector } from "react-redux"
import { onTokenchange } from "../../redux/user"

const PanelQuickAccess = ({ className }) => {

    let location = useLocation()
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let p = useSelector(state => state) 

    const handelGoOut = () => {

        localStorage.removeItem("token")
        dispatch(onTokenchange(""))
        navigate("/") 
        console.log(p);

    }

    return (
      <div dir='rtl' className={'border-t border-t-[#e7e6e6] mt-[15px] h-[380px] [&>a]:h-[20%] [&>a]:flex [&>a]:items-center [&>a]:pr-[15px] ' + className} >
                          
          <Linkes src="dashboard/home.png" imgClassName="w-12" to="/panel/userpanel" content="پیشخوان" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

          <Linkes src="dashboard/editProfile.png" imgClassName="w-12" to="/panel/editprofile" content="ویرایش پروفایل" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

          <Linkes src="dashboard/menupanel.png" imgClassName="w-12" to="/panel/ListOfCourse" content="لیست دوره ها" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />
          
          <Linkes src="dashboard/reserve.png" imgClassName="w-12" to="/panel/reserveCourse" content="دوره های رزرو شده" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

          <Linkes src="dashboard/favoriteCourse.png" imgClassName="w-12" to="/panel/favoriteCourse" content="دوره های مورد علاقه" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />
          <Linkes src="dashboard/favoritNewsPicture.png" imgClassName="w-12" to="/panel/favoriteNews" content="اخبار های مورد علاقه" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />
          
          
          <Linkes src="dashboard/editPassword.png" imgClassName="w-12" to="/panel/changePassword" content="تغییر رمز ورود" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

          
          <div className="flex items-center pr-[15px] cursor-pointer h-[20%] text-[#888] hover:bg-[#eee] " onClick={()=> { raiseUp(undefined,"",false) ; handelGoOut() }} >
              <img src="../src/assets/images/dashboard/logout.png" alt="" className={"ml-[15px] w-10"} />
              <div> خروج از حساب </div>
          </div>


      </div>
    )
}

export default PanelQuickAccess