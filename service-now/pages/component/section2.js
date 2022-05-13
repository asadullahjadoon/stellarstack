import Image from "next/image";
import customer from "./customer-bg.webp"
function Section2() {
    return (

<div className="flex md:flex-col lg:flex-row">
    <div className=" pl-4 sm:pl-8 md:pl-8 lg:pl-16">
        <div>
            <h1 className=" pt-12 underline font-bold text-[#293e40]">BUI<span className="no-underline"></span>SNESS OUTCOMES</h1>
        </div>
        <div>
            <h1 className=" font-bold text-3xl text-[#293e40]">"<br></br>The positive impact on our<br></br>operations has been<br></br> extraordinary. We've<br></br>reduced daily ticket<br></br>volumes by 41% by fixing<br></br>problems before they occur.</h1>
        </div>
        <div>
            <h4 className=" pt-6 font-bold text-[#293e40]">Scott Thomson</h4>
            <p className=" pt-2">VP, Technical Customer Service, Rogers<br></br>Communication Inc.</p>
        </div>
        <div>
        <button className='text-[#293e40] border-solid border border-[#293e40] px-4 py-1  my-4 hover:bg-[#293e40] hover:text-[#FFFFFF]'>Read Story</button>
        </div>
    </div>
    <div className="hidden sm:hidden md:hidden lg:block">
    <Image src={customer} alt="immg"/>
    </div>
</div>











  )
}
export default Section2;