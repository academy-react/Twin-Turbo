import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Submit = ({content , className , data}) => {

  return (
    <>
        <button onClick={() => toast(data)} type='submit' className={"flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px] hover:bg-[#38b24c] transition-all duration-300 " + className}>
            {content}
        </button>
        <ToastContainer />
    </>
  )
}

export default Submit