const findPath = (index, location , navigate) => {
    let num1 = location.pathname.indexOf("/");
    let num2 = location.pathname.lastIndexOf("/");
    let result = location.pathname.slice(num1, num2);
    navigate(`${result}/${index + 1}`);
};

export default findPath