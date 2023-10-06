import Footer from "../components/common/Footer";
import Services from "../components/Services";
import Category from "../components/Category";
import Courses from "../components/CoursesLanding";
import Masters from "../components/Masters";
import News from "../components/News";
import TopLanding from "../components/TopLanding";
import Recommands from "../components/Recommands";

const Landing = () => {
  // window.onscroll = ()=> {
  //   console.log(pageYOffset);
  //   if(pageYOffset > 140) man.style.right = "-140px"
  //   if(pageYOffset > 240) holder.style.transform = "scale(100%)"
  //   if(pageYOffset > 300) woman.style.left = "-110px"
  //   if(pageYOffset > 710) planet1.style.left = "-40px"
  //   if(pageYOffset > 1100) planet2.style.right = "40px"
  //   if(pageYOffset > 1700) coursesHolder2.style.right = "145px"
  //   if(pageYOffset > 1900) coursesHolder1.style.left = "100px"
  //   if(pageYOffset > 1900) coursesHolder3.style.left = "160px"
  //   if(pageYOffset > 3000) {
  //     holderMasters.style.width = "100%"
  //     holderMasters.style.opacity = "1"
  //   }
  //   if(pageYOffset > 3800) {
  //     recommandsForm.style.height = "600px"
  //     recommandsForm.style.opacity = "1"
  //   }
  // }

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
