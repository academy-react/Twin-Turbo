import { Header } from '../components/common/'
import { Outlet } from 'react-router-dom'
import PanelQuickAccess from '../components/panel/PanelQuickAccess'
import { useEffect, useState } from 'react'
import customAxios from '../core/services/interceptor'
import { useSelector } from 'react-redux'

export let selTok;
export let setMyInf;
const Panel = () => {

    let sel = useSelector(state => state.user.token)

    selTok = sel
    const [myInfo, setMyInfo] = useState()

    const getInfo = async () => {
        if(sel !== "") {
            let result = await customAxios.get("/SharePanel/GetProfileInfo")
            setMyInfo(result)
        }
        else {
            let result = await customAxios.get("/SharePanel/GetProfileInfo")
            setMyInfo(result)
        }
    }

    useEffect(() => {
      getInfo()
      setMyInf = getInfo
    }, [])

  return (
    <>
        <div className=" w-[1920px] mx-auto my-0 max-[1919px]:w-full relative">

            <Header src="avatar.png" color="#5A0BA9" hClass="fixed" />
            <div className="w-[90%] h-[900px] mx-auto my-10 flex justify-evenly [&>div]:border max-[1020px]:w-full max-[1800px]:w-[100%]">

                <Outlet/>

                <div className="right-1 max-[1200px]:w-[360px] max-[1020px]:hidden bg-white rounded-3xl shadow-[0_0_7px_#ddd] w-[415px] ">

                    <div className=" h-[150px] flex justify-center items-center px-3">
                        <div className='text-[25px] truncate w-60' id='usename'>{myInfo?.fName} {myInfo?.lName}</div>
                        <img src={myInfo?.currentPictureAddress} alt="" id='picprofile' className='h-[80px] w-[80px] rounded-[50%]' />
                    </div>

                    <PanelQuickAccess />

                </div>

            </div>
        </div>

    </>
  )
}

export default Panel