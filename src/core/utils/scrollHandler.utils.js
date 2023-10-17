const buttonHandler = (navigate, Link) => {
  navigate(Link);
  setTimeout(() => {
    document.documentElement.scrollTop = 0;
  }, 1);
};

export default buttonHandler;
