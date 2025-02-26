import React from 'react'

const Carts = () => {
  return (
    <>
     <section className='min-h-screen w-full bg-white overflow-hidden'>
        <h1 className='text-center text-[25px] md:text-6xl font-bold pt-8  '>Unique and Authentic<br/> Vintage Designer Jewellery</h1>
        <div id='parent' className='flex flex-col sm:flex-col lg:flex-row justify-center pt-[1.8cm] gap-x-[5cm]'>
         <div id='left' className='px-6'>
           <div id='childs parent' className='grid grid-cols-2 gap-x-5 gap-y-8'>
              <div>
                <h1 className='font-bold text-xl text-justify'>Using Good<br/> Quality Materials</h1>
                <p className='text-justify pt-3'>Lorem ipsum dolor<br/> sit amt, consectetur<br/> adipiscing elit.</p>
              </div>
              <div> <h1 className='font-bold text-xl text-justify'>Using Good<br/> Quality Materials</h1>
              <p className='text-justify pt-3'>Lorem ipsum dolor<br/> sit amt, consectetur<br/> adipiscing elit.</p></div>
              <div> <h1 className=' text-justify font-bold text-xl'>Using Good<br/> Quality Materials</h1>
              <p className='text-justify pt-3'>Lorem ipsum dolor<br/> sit amt, consectetur<br/> adipiscing elit.</p></div>
              <div> <h1 className='text-justify font-bold text-xl'>Using Good<br/> Quality Materials</h1>
              <p className='text-justify pt-3'>Lorem ipsum dolor<br/> sit amt, consectetur<br/> adipiscing elit.</p></div>
           </div>
         </div>
         <div id='right'>
            <div id='childsparent' className='flex flex-col md:flex-row px-9 py-3 gap-8 pt-8 md:pt-9 lg:pt-0 md:gap-x-[1.2cm]'>
               <img src='/i7.png' className='w-[230px]'/>
               <p className='leading-8'>This piece is ethically<br/>
                  crafted in our small<br/>
                  family-owned workshop <br/>
                  in Peru with unmatched <br/>
                  attention to detail and <br/>
                  care. The Natural color <br/>
                  is the actual natural <br/>
                  color of the fiber, undyed<br/>
                   and 100% traceable.</p>
                   <button className='bg-black text-white h-12 w-[4cm] rounded-md'>See All Products</button>
            </div>
         </div>
        </div>
     </section>
    
    </>
  )
}

export default Carts