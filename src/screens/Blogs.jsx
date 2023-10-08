import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import {Link} from 'react-router-dom'
const Blogs = () => {
  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">

        <Header  src="avatar.png" color="#5A0BA9" />

            <div className='w-full h-[1400px] border flex flex-col items-center' >
              <div className='inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]'>بلاگ</div>
              
              <div className='w-[90%] h-[100px] flex items-center justify-between'>

                  <div className='w-[80px] h-[50px] p-[5px] flex items-center justify-center rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]'>4</div>

                  <div className='w-[30%] h-[50px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[6px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] [&>input:checked+label]: border-b-4'>
                    <input type="radio" name="radio" id="radio1"/>
                    <label htmlFor="radio1">بلاگ</label>
                    <input type="radio" name="radio" id="radio2" />
                    <label htmlFor="radio2">اخبار</label>
                    <input type="radio" name="radio" id="radio3" />
                    <label htmlFor="radio3">مقالات</label>
                    <input type="radio" name="radio" id="radio4" />
                    <label htmlFor="radio4">برترین اخبار</label>
                    <input type="radio" name="radio" id="radio5" />
                    <label htmlFor="radio5">سایر</label>
                  </div>

                  <div className='w-[120px] h-[50px] p-[5px] flex items-center justify-center rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px]'>
                    <img src="../src/assets/images/view (1).png" alt="" />
                    <img src="../src/assets/images/view (2).png" alt="" />
                  </div>


              </div>
            </div>
            

        <Footer />
 
    </div>
  )
}

export default Blogs