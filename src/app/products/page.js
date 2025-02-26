'use client'
import React, { useState } from 'react'
import { data } from '../Data'
import Link from 'next/link'
const page = () => {
  const[get,setget] = useState(data)
  return (
    <>
     <section className='h-auto w-full py-5'>
     <div className='flex gap-x-[3cm] flex-wrap justify-center gap-y-8 pt-[1.1cm]'>
     {
      get.map((val) => {
        return(
          <div key={val.id} className='h-[400px] w-[300px]'>
              <Link href={`/products/${val.id}`}><img src={val.img} className='w-full h-[300px]'/></Link>
              <h1 className='text-2xl pt-3'>{val.name}</h1>
              <p className='text-gray-800 text-xl'>{val.p}</p>
              <p className='text-[20px] font-bold'>{val.price}</p>
          </div>
        )
      })
      }
     </div>
     </section>
    </>
  )
}

export default page