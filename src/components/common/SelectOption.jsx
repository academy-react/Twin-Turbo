import { Rows } from '../map/CoursesMap'
const SelectOption = () => {
  return (
    <select name="" id="" className="w-[80px] h-[60px] bg-white p-[5px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] max-[600px]:hidden max-[770px]:scale-[90%]">
      <option value="1" onClick={(e)=> Rows(e.target.value)}>1</option>
      <option value="2" onClick={(e)=> Rows(e.target.value)}>2</option>
      <option value="3" onClick={(e)=> Rows(e.target.value)}>3</option>
      <option value="4" selected onClick={(e)=> Rows(e.target.value)}>4</option>
    </select>
  );
};

export default SelectOption;
