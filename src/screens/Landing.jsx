import Footer from "../components/common/Footer";
import Services from "../components/landing/Services";
import Category from "../components/landing/Category";
import Courses from "../components/landing/CoursesLanding";
import Masters from "../components/landing/Masters";
import News from "../components/landing/News";
import TopLanding from "../components/landing/TopLanding";
import Recommands from "../components/landing/Recommands";
import Navigation from "../components/landing/Navigation";
import landingScrollLogic from "../core/utils/landingScrollLogic.utils";

const Landing = () => {
  landingScrollLogic()

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
      <div className="h-[5px] bg-[#9f009a] fixed top-0 left-0 z-50" style={{width:"0px"}} id="scrollNav"></div>
      <Navigation />
      <TopLanding />
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
