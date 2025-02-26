'use client'
import { data } from '../../Data'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
const page = () => {
    const [res, setres] = useState(data)
    const params = useParams()
    const result = Number(params.id)
    const final = res.find((item) => item.id === result)
    return (
        <>
            <section className='h-auto w-full bg-white py-[2cm]'>
                <div id='parent' className='flex flex-col justify-center lg:flex-row space-x-9 px-auto'>
                    <div className='h-[600px] w-[500px] flex justify-center md:flex md:justify-center'>
                        <img
                            src={final.img}
                            className='h-[570px] w-[450px] sm:w-[90%] sm:h-auto md:w-[80%] md:h-auto px-4 md:px-0'
                        />
                    </div>
                    <div className='pt-[3cm] text-center md:text-left'>
                        <h1 className='text-xl md:text-[30px] leading-[1.5cm]'>Product Name : {final.name}</h1>
                        <p className='text-xl md:text-[30px] text-gray-400 leading-[1.5cm]'>Product category : {final.p}</p>
                        <h2 className='text-xl md:text-[30px] leading-[1.5cm]'>Product price : {final.price}</h2>
                        <div className='flex gap-x-6 pt-9 justify-center md:justify-start'>
                            <button className='border hover:bg-black hover:text-white px-6 py-3'>Buy Now</button>
                            <button className='bg-black text-white px-6 py-3'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <hr />
            </section>


        </>
    )
}

export default page