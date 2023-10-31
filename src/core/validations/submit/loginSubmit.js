import account from "../../services/account";

const loginSubmit = (values,navigate) => {
    console.log(values);
    if(values.name == account.username && values.password == account.password) {
        navigate("/panel/userpanel")
    }
}

export default loginSubmit