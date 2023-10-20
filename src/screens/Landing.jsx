import { useEffect, useRef } from "react";
import Footer from "../components/common/Footer";
import {Category , Courses , Masters , Navigation , News , Recommands , Services , HeroSection} from '../components/landing'
import landingScrollLogic from "../core/utils/landingScroll.utils";
import DarkBtn from '../components/landing/DarkBtn'



const Landing = () => {



  useEffect(() => {
      document.addEventListener("scroll",()=> landingScrollLogic())
      // document.addEventListener("click",(e)=> {if(e.target.className !== "bg-white w-[30%] h-[100v…ition-all duration-1000") menu.current.style.right = '-30%' })
  }, [])

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden max-[1919px]:w-full relative">
      

      <div className="h-[5px] bg-[#9f009a] fixed top-0 left-0 z-[1000]" style={{width:"0px"}} id="scrollNav"></div>
      <DarkBtn />
      <Navigation />
      <HeroSection />
      <Services />
      <Category />
      <Courses />
      <Masters />
      <News />
      <Recommands />
      <Footer />
    </div>
  );
};

export default Landing;
