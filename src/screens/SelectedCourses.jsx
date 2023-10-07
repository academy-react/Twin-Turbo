import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RightPanel from "../components/common/RightPanel";

const SelectedCourses = () => {
  const [flag, setFlag] = useState(1);
  const change = (num) => {
    setFlag(num);
    

    if (num == 1) {
      btn2.style.background = "transparent";
      btn1.style.background = "#F5F5F5";
    } else if (num == 2) {
      btn1.style.background = "transparent";
      btn2.style.background = "#F5F5F5";
    }
  };

  return (
    <>
      <div className="w-[1920px] mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />
        <div className="w-[full] h-[1400px] flex justify-center items-center gap-[50px]">
          <div  dir="ltr"  className="w-[30%] h-[1300px] flex flex-col items-center justify-center rounded-xl shadow-[0_0_7px_#ddd] bg-white">
            <div className="w-[80%] h-20 rounded-lg bg-white shadow-[0_0_7px_#ddd] flex flex-col">
              <div className="text-[26px]">مشخصات دوره</div>
            </div>
          </div>
          <RightPanel src="angularCourses.png" name="انگولار" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SelectedCourses;
