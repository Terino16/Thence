import  { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
interface DropdownProps{
title:string,
message:string
}
const Dropdown = ({ title, message }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full ">
    <button
      className=" text-black  font-Manrope text-xl flex items-center justify-between w-full"
      onClick={toggleDropdown}
    >
      {title} 
      {isOpen?<CiCircleMinus />:<CiCirclePlus/>}
    </button>
    {isOpen && (
      <div className="absolute z-10  p-2 mt-1 rounded w-full text-left">
        <p className='font-Manrope text-lg text-gray-400'>{message}</p>
      </div>
    )}
  </div>
  );
};

export default Dropdown;
