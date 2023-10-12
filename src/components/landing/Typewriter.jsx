import useTypewriter from "../customHook/Typewriter";

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return (
    <p
      className="absolute right-[200px] top-[340px] text-[20px] w-[600px] text-[#777]"
      dir="rtl"
      id="paragraph"
    >
      {displayText}
    </p>
  );
};

export default Typewriter;
