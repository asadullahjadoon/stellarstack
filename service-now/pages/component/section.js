import Image from "next/image";
import bg1 from "./bg1.jpg"
// import myImg1 from './bg.png';
import React from 'react'
function Section() {
  return (
  
<div className='flex w-full lg:justify-between flex-col sm:flex-col md:flex-col lg:flex-row md:justify-center lg:px-0 md:px-4 sm:px-4 px-4'>
  <div className="">
    <div>
    <h1 className='pl-0 sm:pl-0 md:pl-4 lg:pl-16 pt-20 text-xl text-[#293e40]'>Solution<span className='pl-6'>/</span></h1>
    </div>
    <div>
      <h1 className='pl-0 sm:pl-0 md:pl-4 lg:pl-16 pt-20 text-xl sm:text-3xl md:text-3xl font-bold lg:text-5xl text-[#293e40]'>Effortless customer<br></br>experiences</h1>
    </div>
    <div>
    <p className='pl-0 sm:pl-0 md:pl-4 lg:pl-16 pt-6 text-xl text-[#293e40]'> Connect and empower the whole company to increase<br></br>customer loyalty and improve the bottom line.</p> 
    </div>
    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row'>
      <div>
      <button className='text-[#293e40] border-solid border border-[#293e40] px-4 py-1 ml-0 sm:ml-0 md:ml-4 lg:ml-16  mt-4 hover:bg-[#293e40] hover:text-[#FFFFFF]'>Wacth video</button>
      </div>
      <div className="flex pl-0 sm:pl-0 md:pl-8 lg:pl-0">
        <p className='pl-0 sm:l-0 md:pl-0 lg:pl-8 pt-6'>Get Forrester Report</p>
        <svg className="mt-7 ml-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>

      </div>
    </div>
  </div>
{/* div 2 */}

  <div className="md:w-1/2 md:height-[1500px] pl-0 sm:pl-0 md:pl-4 lg:pl-10 mt-4 sm:mt-4 md:mt-4 lg:mt-0 flex justify-center">
  <Image src={bg1} alt="immg"/>
  </div>
</div>



  
  )
}
export default Section;