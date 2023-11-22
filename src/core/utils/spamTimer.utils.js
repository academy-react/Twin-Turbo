const interval = (codeS , codeM , setCodeS , setCodeM) => {
    let timer = setInterval(() => {
        setCodeS(codeS - 1)
        if(codeS == 0) setCodeM(codeM - 1)
        if(codeM == 0 && codeS == 0) clearInterval(timer)
    }, 1000);
}
export default interval