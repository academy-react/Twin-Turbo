import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Footer from '../components/common/Button'
import DataItem from '../components/DataItem'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Blogs = () => {
  const [items, setItems] = useState(DataItem)

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">

        <Header  src="avatar.png" color="#5A0BA9" />

            <div className='w-full  flex flex-col items-center' >
              <div className='inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]'>بلاگ</div>
              
              <div className='w-[90%] h-[100px] flex items-center justify-between'>

                  
                    <select name="" id="" className='w-[80px] h-[60px] appearance-none bg-white p-[5px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  

                  <div className='w-[30%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] [&>input:checked+label]:border-b-[4px]'>
                    <input type="radio" name="radio" id="radio1" />
                    <label htmlFor="radio1">بلاگ</label>
                    <input type="radio" name="radio" id="radio2" />
                    <label htmlFor="radio2">اخبار</label>
                    <input type="radio" name="radio" id="radio3" />
                    <label htmlFor="radio3">مقالات</label>
                    <input type="radio" name="radio" id="radio4" />
                    <label htmlFor="radio4">برترین اخبار</label>
                    <input type="radio" name="radio" id="radio5" defaultChecked={true}/>
                    <label htmlFor="radio5">سایر</label>
                  </div>

                  <div className='w-[120px] h-[60px] p-[5px] flex items-center justify-center rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer'>
                    <img src="../src/assets/images/view (1).png" alt="" />
                    <img src="../src/assets/images/view (2).png" alt="" />
                  </div>




              </div>
              <div dir='rtl' className='w-[90%] flex flex-wrap justify-around'>
                {items.map((element,index)=> {
                  return (
                    <div className='w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] py-[10px]'>


                      <div dir='rtl' className='w-[95%] mx-auto'>
                        <img src={"../src/assets/images/" + element.src} alt="" className='w-full h-[185px] mx-auto'/>
                        <p className='text-[24px] text-right '>{element.name}</p>
                        <span className='text-[#777] w-[100px]'>{element.content}</span>
                        <img src="../src/assets/images/Educated.png" alt="" className='absolute right-[35px] bottom-[30px] scale-[150%] '  />
                        
                      </div>

                    </div>
                  )
                })}
              </div>
              <div className='w-full h-[70px] m-[25px] rounded-[25px] flex justify-center'>
                  <div className='w-[30%] h-full shadow-[0_0_7px_#ddd] rounded-[25px]'>

                  </div>  
              </div>
            </div>
            

        <Footer />
 
    </div>
  )
}

export default Blogs