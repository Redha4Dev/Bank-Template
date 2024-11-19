import { Award, Ribbon } from 'lucide-react'
import React from 'react'

function Awards() {
  return (
    <div className='py-12 px-24 mx-8 my-6 bg-[#12121b] font-IBM grid grid-cols-8 rounded-[3rem] '>
        <h1 className='text-[5vw] md:leading-relaxed col-span-4 font-semibold text-white'>
            <span className='underline space-mono-regular text-green-400 flex'>Awards <Ribbon color='#22c55e' size={120}/> </span> 
             &&nbsp;Recognition
        </h1>
    </div>
  )
}

export default Awards