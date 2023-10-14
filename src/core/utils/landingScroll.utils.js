const landingScrollLogic = () => {

  window.onscroll = () => {
    if (window.location.pathname == "/") {
      if (pageYOffset > 600) {
        header.style.boxShadow = "0 0 7px #ddd" ;
        header.style.background = "#fff";
        header.style.position = "fixed";
      }
      else {
        header.style.boxShadow = "0 0 7px transparent" ;
        header.style.background = "transparent";
        header.style.position = "static";
      }
      if (pageYOffset > 140) {
        man.style.right = "-140px";
        nav.style.opacity = 1;
      } else nav.style.opacity = 0;
      if (pageYOffset > 240) holder.style.transform = "scale(100%)";
      if (pageYOffset > 300) woman.style.left = "-110px";
      if (pageYOffset > 710) planet1.style.left = "-40px";
      if (pageYOffset > 1100) planet2.style.right = "40px";
      if (pageYOffset > 1700) coursesHolder2.style.right = "7%";
      if (pageYOffset > 2000) coursesHolder1.style.left = "4.2%";
      if (pageYOffset > 2000) coursesHolder3.style.left = "7.5%";
      if (pageYOffset > 3000) {
        holderMasters.style.width = "100%";
        holderMasters.style.opacity = "1";
      }
      if (pageYOffset > 3800) {
        recommandsForm.style.height = "600px";
        recommandsForm.style.opacity = "1";
      }
      // progress Bar
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      scrollNav.style.width = scrolled + "%";
    }
    
  };

};



export default landingScrollLogic;