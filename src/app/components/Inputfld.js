import React from 'react'

const Inputfld = () => {
  return (
   <>
    <section className='w-full bg-white overflow-hidden'>
        <h1 className='text-center pt-5 text-4xl font-bold'>Subscribe Our Newsletter</h1>
        <p className='text-center pt-3'>Get the latest information<br/> and promo offers directly</p>
        <div className='flex justify-center px-12 py-3'>
            <input type='text' required placeholder='Enter Your Email...' className='h-[1cm] w-[6cm] border px-3'/>
            <button className='bg-black text-white h-[1cm] w-[3cm] text-[13px] md:text-[15px] px-3'>Get Started</button>
        </div>
    </section>
   </>
  )
}

export default Inputfld