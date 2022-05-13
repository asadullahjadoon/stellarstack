import Image from "next/image";
import bg5 from "./bg5.webp"
function Section1() {
    return (
<div className="flex flex-col sm:flex-col  md:flex-col lg:flex-row  gap-x-60 px-0 sm:px-0 md:px-0 lg:px-8 pl-4 sm:pl-8 md:pl-8 lg:pl-16">
    <div className=" flex-nowrap hidden sm:hidden md:block lg:block">
        <h1 className="font-bold flex-nowrap text-4xl pt-20 text-[#293e40] ">Discover solution</h1>
        <div className="flex">
<div className="w-[4px] h-[40px] bg-green-600  mt-10">
</div>
<div>
    <p className="mt-12 ml-4 font-bold">Enterprise CX</p>

</div>
        </div>

        <div className="flex flex-nowrap">
        <div className="w-[4px] h-[40px] bg-[#293e40]  mt-8">
</div>
<div>
    <p className="mt-10 ml-4 text-xl font-bold text-[#293e40]">Digital business models</p>

</div>
        </div>

         </div>

    <div className="mt-20">
        <div>
        <Image src={bg5} alt="immg "/>
        </div>
<div className=" flex-nowrap">
    <h1 className="font-bold text-2xl text-[#293e40] ">Enterprise CX</h1>
<p className="text-[#293e40] text-xl pt-4">Harness the power of entire company to deliver unmatached customer<br></br>experiences.Emable employees to quickly,proactively, and transparently<br></br> meet and exceed expectations.</p>
<div className="flex">
<h6 className="pt-4 font-bold text-[#293e40]">Get Detail</h6>
<svg className="mt-5 ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
</div>
</div>
         </div>
</div>

        )
    }
    export default Section1;