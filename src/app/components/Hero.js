import React from 'react'
import { IoCartOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <>
    <section className='min-h-screen w-full bg-white overflow-hidden lg:py-6 '>
      <div id='parent' className='flex flex-col sm:flex-col md:flex-row justify-center space-x-[7cm] pt-[2cm] md:pt-[2.3cm] px-9  lg:px[1.5cm]'>
        <div className='md:w-full'>
          <span className='bg-sky-200 text-blue-600 px-5 py-3 rounded-md'>Sale 70%</span>
          <h1 className='text-4xl md:text-[75px] md:text-left lg:text-[65px] md:leading-[1.9cm] font-bold pt-9'>An Industrial<br/> Take on<br/> Streetwear</h1>
          <p className='sm:text-[18px] text-[15px] lg:text-[16px] pt-3'>Anyone can beat you but no one can<br/> beat your outfit as long as you wear<br/> Dine outfits.</p>
          <button className='bg-black text-white px-9 py-3 flex mt-5 rounded-md'><IoCartOutline className='text-3xl'/>Start Shoping</button>
          
        </div>
        <div className='hidden lg:block'>
            <div className='h-[610px] w-[610px] rounded-full bg-[#FEEBE1] mt-[-1cm]'></div>
            <img src='/heroimg.webp' className='mt-[-17cm] w-[650px] h-[630px]'/>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-4 mx-9  md:w-[50%] lg:w-[30%] pt-[1.5cm] lg:mt-[-3.5cm] lg:mx-3 w-full mt-12'>
            <img src='brand1.webp' className='md:w-[160px] md:mx-auto lg:w-[140px]'/>
            <img src='brand2.webp' className='md:w-[160px] md:mx-auto lg:w-[140px]'/>
            <img src='brand3.webp' className='md:w-[160px] md:mx-auto lg:w-[140px]'/>
            <img src='brand4.webp' className='md:w-[160px] md:mx-auto lg:w-[140px]'/>
          </div>
    </section>
    </>
  )
}

export default Hero;
