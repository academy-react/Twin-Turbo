import Footer from "../components/common/Footer";
import Services from "../components/landing/Services";
import Category from "../components/landing/Category";
import Courses from "../components/landing/CoursesLanding";
import Masters from "../components/landing/Masters";
import News from "../components/landing/News";
import TopLanding from "../components/landing/TopLanding";
import Recommands from "../components/landing/Recommands";
import { useLocation } from "react-router-dom";

const Landing = () => {
  window.onscroll = () => {
    if (window.location.pathname == "/") {
      if (pageYOffset > 140) man.style.right = "-140px";
      if (pageYOffset > 240) holder.style.transform = "scale(100%)";
      if (pageYOffset > 300) woman.style.left = "-110px";
      if (pageYOffset > 710) planet1.style.left = "-40px";
      if (pageYOffset > 1100) planet2.style.right = "40px";
      if (pageYOffset > 1700) coursesHolder2.style.right = "145px";
      if (pageYOffset > 2000) coursesHolder1.style.left = "100px";
      if (pageYOffset > 2000) coursesHolder3.style.left = "160px";
      if (pageYOffset > 3000) {
        holderMasters.style.width = "100%";
        holderMasters.style.opacity = "1";
      }
      if (pageYOffset > 3800) {
        recommandsForm.style.height = "600px";
        recommandsForm.style.opacity = "1";
      }
    }
  };

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
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
