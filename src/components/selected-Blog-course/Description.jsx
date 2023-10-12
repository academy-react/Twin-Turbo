import Text from '../selected-Blog-course/Text'
const DescriptionBlog = () => {
  return (
    <>
      <div className="w-full h-[650px] bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10 py-[25px]">
        <Text />
        <div className="w-full h-[50px] flex justify-between items-center pl-[15px]">
            <img src="../src/assets/images/star.png" alt="" className="scale-[80%]" />
            <p className="text-[#707070]">12  مهر  1402</p>
        </div>
      </div>
    </>
  );
};

export default DescriptionBlog;
