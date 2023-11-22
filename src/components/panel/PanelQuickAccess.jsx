import { useLocation } from "react-router-dom"
import { Linkes } from "../common"

const PanelQuickAccess = ({ className }) => {

    let location = useLocation()

  return (
    <div dir='rtl' className={'h-[380px] [&>a]:h-[20%] [&>a]:flex [&>a]:items-center [&>a]:pr-[15px] ' + className} >
                        
        <Linkes src="dashboard/home.png" imgClassName="w-10" to="/panel/userpanel" content="پیشخوان" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

        <Linkes src="dashboard/editProfile.png" imgClassName="w-10" to="/panel/editprofile" content="ویرایش پروفایل" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

        <Linkes src="dashboard/selectedCourses.png" imgClassName="w-10" to="/panel/mycourse" content="دوره های من" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

        <Linkes src="dashboard/menupanel.png" imgClassName="w-10" to="/panel/ListOfCourse" content="لیست دوره ها" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />
        
        <Linkes src="dashboard/reserve.png" imgClassName="w-9" to="/panel/reserveCourse" content="دوره های رزرو شده" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

        <Linkes src="courses/heart-fill.png" imgClassName="w-9" to="/panel/favoriteCourse" content="دوره های مورد علاقه" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

        <Linkes src="dashboard/logout.png" imgClassName="w-10" to="/" content="خروج" acceptedClassName={location.pathname.indexOf("/panel") !== -1 ? "bg-gradient-to-r from-[#9f009a] to-[#fff] text-[#000]" : "hover:bg-[#eee] text-[purple]"} ejectedClassName="hover:bg-[#eee] text-[#888]" />

    </div>
  )
}

export default PanelQuickAccess