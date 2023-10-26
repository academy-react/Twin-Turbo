const Submit = ({content , className}) => {
  return (
    <>
        <button type='submit' className={"flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px] hover:bg-[#38b24c] transition-all duration-300 " + className}>
            {content}
        </button>
    </>
  )
}

export default Submit