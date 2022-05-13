import Image from "next/image";
import box1 from "./box1.webp"
// import box2 from "./box2.jpg"
import box3 from "./box3.webp"
import box4 from "./box4.jpg"

function Section3() {
    return (

<div className="bg-[#e1e1e1] pb-16 ">
    <div className="">

<div className="flex justify-between flex-wrap flex-col sm:flex-col md:flex-col lg:flex-row">
<div className="pl-4 sm:pl-8 md:pl-8 lg:pl-16">
    <h1 className="font-bold pt-14 text-3xl text-[#293e40]">Dig deeper</h1>
    <p className="mt-4 text-base">Find out what thought leaders and industry experts have to say about improving the<br></br>customer experience.</p>
</div>
<div>
    
<button className='ml-4 sm:ml-8 md:ml-8 lg:ml-16 text-[#293e40] border-solid border border-[#293e40] px-4 py-1 mt-8 sm:mt-8 md:mt-8  lg:mt-24  hover:bg-[#293e40] hover:text-[#FFFFFF]'>Explore More</button>
</div>
</div>

<div className=" px-0 sm:px-0 md:px-16 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  lg:gap-x-4 gap-x-4 sm:gap-x-4 md:gap:x-4  mt-20 ">
<div class="w-full rounded overflow-hidden shadow-lg bg-white ">
<Image class="hover:scale-125" src={box1} alt="immg"/>
  <div class="px-6 py-4">
    <div class="">
      <h4 className="text-xs">ARTICLE</h4>
      <h1 className="font-bold text-xl mb-2 pt-1">Challenges accelerate digital<br></br>transformation </h1>
    </div>
    <p class="text-gray-700 text-base pt-6">
A global pandemic increases demand for customer-centric digital services.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
  </div>
</div>

<div class="w-full rounded overflow-hidden shadow-lg bg-white mt-4 sm:mt-4 md:mt-4 lg:mt-0">

<Image class="hover:scale-125" src={box4}  alt="immg"/>

  <div class="px-6 py-4">
    <div class="">
      <p className="text-xs">Q&A</p>
<h1 className="font-bold text-xl mb-2 pt-1">Redesigning the customer experience</h1>
    </div>
    <p class="text-gray-700 text-base pt-6">
    Hone your digital strategy by untangling and simplifying digital workflows.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
  </div>
</div>

<div class="w-full rounded overflow-hidden shadow-lg bg-white mt-4 sm:mt-4 md:mt-4 lg:mt-0">
<Image class="hover:scale-125" src={box3} alt="immg"/>
  <div class="px-6 py-4">
    <div class="">
   <p className="text-xs">Q&A</p>  
   <h1 className="font-bold text-xl mb-2 pt-1">Satisfied employees mean a better customer experience</h1>
 
    </div>
    <p class="text-gray-700 text-base pt-6">
    Understanding EX’s impact on CX can help support organizations thrive.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
  </div>
</div>

<div class="w-full rounded overflow-hidden shadow-lg bg-white mt-4 sm:mt-4 md:mt-4 lg:mt-0">
<Image class="hover:scale-125" src={box4} alt="immg"/>
  <div class="px-6 py-4">
    <div class="">
<p className="text-xs">ARTICLE</p>
<h1 className="font-bold text-xl mb-2 pt-1">Telecom invests in customer satisfaction</h1>

    </div>
    <p class="text-gray-700 text-base pt-6">
    Carriers rebuild customer loyalty and trust by building new digital experiences.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <svg className="transition duration-150 ease-out hover:ease-in"  xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> 
				
  </div>
</div>

</div>
    </div>
</div>






        )
    }
    export default Section3;    