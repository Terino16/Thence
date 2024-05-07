import Mark from "../assets/mark.png"

const WhiteBox = () => {
  return (
    <div className="border bg-white p-12 absolute top-[70px] left-[-200px] rounded-3xl w-[290px] h-[239px] space-y-5 ">

            
    <div className="flex items-baseline font-Manrope space-x-1">
        <img src={Mark} width={100} className=" absolute top-[-17px] left-[5px]"/>
    <p className="text-5xl font-bold">40%</p>
    
    </div>

    <div className="text-[#828282]">
    Achieved reduction in project execution time by optimising team availability
    </div>

   
  </div>
  )
}

export default WhiteBox