import { useEffect } from "react";
import Footer from "../components/common/Footer";
import {Category , Courses , Masters , Navigation , News , Recommands , Services , HeroSection} from '../components/landing'

import landingScrollLogic from "../core/utils/landingScroll.utils";



const Landing = () => {
  

  useEffect(() => {
      document.addEventListener("scroll",landingScrollLogic)
  }, [])
  
  

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
      <div className="h-[5px] bg-[#9f009a] fixed top-0 left-0 z-50" style={{width:"0px"}} id="scrollNav"></div>
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
