import FooterSvg from "../landing/footerSvg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-[1920px] overflow-hidden my-0 mx-auto max-[1919px]:w-full max-[1300px]:border-t-2 max-[1300px]:border-t-[#ccc]">
          <FooterSvg />
          <div className=" max-[1300px]:flex-col-reverse max-[1300px]:[&>div]:w-full flex justify-around items-center  flex-wrap -mt-16 [&>div]:w-4/12 ">
            <div className="flex justify-evenly items-center [&>img]:w-[200px] [&>img]:h-[180px] [&>img]:object-cover ">
                <img src="../src/assets/images/footer/enamad.png" />   
                <div className="flex flex-col justify-center items-center pb-6 text-[#67008f] text-[22px] h-[150px] min-[1300px]:hidden max-[770px]:hidden">
                  <img src="../src/assets/images/footer/logoes.png" className="h-12 mb-[5px] cursor-pointer"/>
                  <div>ما را در شبکه های اجتماعی دنبال کنید</div>                
                </div>       
                <img src="../src/assets/images/footer/samandehi.png" className="h-12 mb-[5px] cursor-pointer"/>
            </div>

            <div className="flex flex-col justify-center items-center pb-6 text-[#67008f] text-[22px] min-[770px]:hidden max-[770px]:flex">
                <img src="../src/assets/images/footer/logoes.png" className="h-12 mb-[5px] cursor-pointer"/>
                <div>ما را در شبکه های اجتماعی دنبال کنید</div>
            </div>

            <div className="flex max-[1300px]:justify-around justify-around items-start [&>ul>li]:my-1 text-[20px] " dir="rtl">
              <ul className="[&>li]:cursor-pointer max-[1300px]:pt-[180px]">
                <li>بلاگ</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>همکاری با ما</li>
                <li>سوالات متداول</li>
              </ul>
              <ul className="max-[1300px]:pt-[180px]">
                <li>شماره تماس : </li>
                <li dir="ltr">+989909123183</li>
                <li dir="ltr">+989027912478</li>
              </ul>
              <img src="../src/assets/images/landingService/Group 159.png" alt="" className="max-[770px]:hidden hidden max-[1300px]:block scale-[80%] relative top-[50px] "/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
