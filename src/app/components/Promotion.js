import React from 'react'

const Promotion = () => {
  return (
   <>
   <section className="min-h-screen w-full bg-white overflow-hidden p-6">
    <h2 className='text-xl font-bold text-blue-400 text-center'>PROMOTIONS</h2>
     <div className='flex justify-center pt-9'>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px]">
        
        {/* 1st Box (Text + Image) */}
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-start row-span-2">
          <h2 className="text-3xl font-bold">GET UP TO 60%</h2>
          <p className="text-gray-600 mt-2">For the summer season</p>
          <img src="/grid1.webp" className="mt-4 w-full h-auto object-cover" />
        </div>

        {/* 2nd Box (Flex Sweatshirt) */}
        <div className="bg-beige-300 p-4 bg-yellow-200">
          <h3 className="text-lg font-semibold">Flex Sweatshirt</h3>
          <p className="text-gray-500 line-through">$100.00 <span className="text-black font-bold">$75.00</span></p>
          <img src="/grid2.webp" className="w-[250px] h-[300px] object-cover mt-2 " />
        </div>

        {/* 3rd Box (Push Button Bomber) */}
        <div className="bg-gray-200 p-4">
          <h3 className="text-lg font-semibold">Flex Push Button Bomber</h3>
          <p className="text-gray-500 line-through">$225.00 <span className="text-black font-bold">$190.00</span></p>
          <img src="/grid.3.webp" className="w-[250px] ml-8 h-[300px] object-cover mt-2" />
        </div>

        {/* 4th Box (Full Width Promo Code) */}
        <div className="bg-black text-white p-6 text-center col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl font-bold">GET 30% Off</h2>
          <p className="text-gray-300 mt-2">USE PROMO CODE</p>
          <div className="bg-gray-800 text-white px-6 py-2 mt-4 inline-block rounded-md">
            DINEWEEKENDSALE
          </div>
        </div>

      </div>
     </div>
    </section>

   </>
  )
}

export default Promotion