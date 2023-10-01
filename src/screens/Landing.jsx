import Services from "../components/Services";
import Category from "../components/Category";
import TopLanding from "../components/TopLanding";
const Landing = () => {
  return (
    <div className="w-[1280px] mx-auto my-0 overflow-hidden">
      <TopLanding />
      <Services />
      <Category />
    </div>
  );
};

export default Landing;
