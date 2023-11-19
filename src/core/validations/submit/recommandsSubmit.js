import { toast } from 'react-toastify';

const recommandsSubmit = (value,toastData , st)=> {
    st(localStorage.getItem("theme"))
    console.log(value);
    toast(toastData)
}

export default recommandsSubmit