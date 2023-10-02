import Services from "../components/Services";
import Category from "../components/Category";
import Courses from "../components/Courses";
import Masters from "../components/Masters";
import News from "../components/News";
import TopLanding from "../components/TopLanding";
const Landing = () => {
  return (
    <div className="w-[1280px] mx-auto my-0 overflow-hidden">

        <TopLanding />
        <Services />
        <Category />
        <Courses />
        <Masters />
        <News />

    </div>
  );
};

export default Landing;
