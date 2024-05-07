import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="static bottom-5 border flex items-center justify-between bg-slate-200 w-full px-5 py-10 rounded-xl ">
      <div className="flex items-center">
        <FaRegCopyright />
        <span>Talup 2023 All rights Reserved</span>
      </div>
      <div className="flex items-center space-x-5">
        <p>Terms and Condition</p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
