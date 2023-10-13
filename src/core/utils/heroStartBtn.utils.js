const handel = (parentText,btn) => {
    let interval = setInterval(() => {
          if(parentText.current.firstChild.innerHTML.length == 317) {
            btn.current.style.opacity = 1
            setTimeout(() => {
              clearInterval(interval)
            }, 100);
          }
    }, 1000);
}

export default handel