import Image from "next/image";
import bg6 from "./bg6.webp"

function Section4() {
    return (

<div className="">
   <div className="main w-full flex space-x-6 flex-col sm:flex-col md:fle-col lg:flex-row">
<div className="w-1/2 my-12 ml-12">
<Image src={bg6} alt="immg"/>
</div>


<div className="mt-4 w-full sm:w-full md:full  lg:w-1/2 py-24">
    <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl  lg:text-4xl text-[#293e40]">Why ServiceNow</h1>
    <p className="mt-2  text-xl text-[#293e40]">Only ServiceNow can bring your solution to life width the power<br></br>of the Now Platform'. Deliver one system of action for quick issue<br></br>resolution and effortless experiences.</p>

    <div className="flex">
    <div>
    <button className='text-[#293e40] border-solid border border-[#293e40] px-2  lg:px-4 py-1  my-4 hover:bg-[#293e40] hover:text-[#FFFFFF] text-sm'>Explore Platform</button>
    </div>
    <div className="flex">
<h4 className="mt-5 ml-8 text-[#293e40]">Find Solution</h4>
<svg className="mt-6 ml-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
    </div>
</div>

</div>


   </div>
</div>




        )
    }
    export default Section4;  