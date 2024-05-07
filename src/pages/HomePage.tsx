import Heading from "../components/Heading";
import Girl from "../assets/Girl.png";
import GreenBox from "../components/GreenBox";
import Rocket from "../assets/Vector.png";
import WhiteBox from "../components/WhiteBox";
import { FaArrowRight } from "react-icons/fa";
import TextCarousel from "../components/TextCarousel";
import VectorStroke from "../assets/VectorStroke.png"
import Dropdown from "../components/DropDown";
import {Options} from "../options"


const HomePage = () => {
  return (
    <div className="my-8 min-h-screen">
      <Heading
        title="Success journey "
        message="Every success journey we have encountered"
      />

      <div className="flex items-center justify-end px-8 my-14 ">
        <div className="relative">
          <img
            src={Girl}
            className="overflow-hidden w-[406px] h-[446px] rounded-3xl"
          />
          <WhiteBox />
          <GreenBox />
          <div className="border bg-white p-[16px] absolute bottom-[30px] left-[-100px] flex items-center  justify-between rounded-full w-[200px] h-[88px] ">
            <div>
              <img src={Rocket} height={20} width={20} />
            </div>
            <div className="">
              <p className=" text-Manrope text-xl font-semibold">10 Days</p>
              <p className="text-[#828282]"> Staff Deployment</p>
            </div>
          </div>
        </div>

        <div className="items-left w-[45%] pl-[150px] space-y-8">
         <TextCarousel/>
          <button className="px-7 py-6  flex items-center space-x-3 border rounded-full font-Manrope text-[15px] font-medium bg-black text-white">
            <p>Explore more</p> <FaArrowRight />
          </button>
        </div>
       
      </div>


      <div className="bg-[#E8EEE7] p-16 my-[200px] rounded-2xl relative flex items-center justify-between">
        <div className="flex flex-col justify-end space-y-5 ">
          <span>
          <p className="font-Covered text-2xl text-[#9E9D9D]">What's on your Mind</p>
          <p className=" font-Manrope text-5xl text-black"> Ask Questions</p>
          </span>
          <img src={VectorStroke} width={400} className="static bottom-0"/>
        </div>

        <div className="w-1/2 space-y-16 border-b">
          {Options.map((option) => {
            return (
              <Dropdown
                key={option.id}
                title={option.title}
                message={option.message}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
