import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
const Blogs = () => {
  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">

        <Header  src="avatar.png" color="#5A0BA9" />

            <div className='w-full h-[1400px] border flex flex-col items-center' >
              <div className='inline-block my-[15px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]'>بلاگ</div>
            </div>
            

        <Footer />
 
    </div>
  )
}

export default Blogs