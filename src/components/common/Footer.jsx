import FooterSvg from "../landing/footerSvg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-[1920px] overflow-hidden my-0 mx-auto">
          <FooterSvg />
          <div className="flex justify-around items-center flex-wrap -mt-16 [&>div]:w-4/12 [&>div]:h-[200px]">
            <div className="flex justify-evenly items-center [&>img]:w-[200px] [&>img]:h-[180px] [&>img]:object-cover">
              <img src="../src/assets/images/footer/enamad.png" />
              <img src="../src/assets/images/footer/samandehi.png" />
            </div>
            <div className="flex flex-col justify-end items-center pb-6 text-[#67008f] text-[22px]">
              <img
                src="../src/assets/images/footer/logoes.png"
                className="h-12 mb-[5px] cursor-pointer"
              />
              <div>ما را در شبکه های اجتماعی دنبال کنید</div>
            </div>
            <div
              className="flex justify-around items-start [&>ul>li]:my-1 text-[20px]"
              dir="rtl"
            >
              <ul className="[&>li]:cursor-pointer">
                <li>بلاگ</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>همکاری با ما</li>
                <li>سوالات متداول</li>
              </ul>
              <ul>
                <li>شماره تماس : </li>
                <li dir="ltr">+989909123183</li>
                <li dir="ltr">+989027912478</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
