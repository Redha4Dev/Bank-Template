import { ArrowRight, CheckSquare } from 'lucide-react'
import React from 'react'
import HeroButton from '../Components/HeroButton'
import SimpleButton from '../Components/SimpleButton'

function Qualift() {
  return (
    <div className='px-12 py-12 mx-6 flex flex-wrap bg-white  rounded-[3rem] font-IBM '>
        <div className='p-6 font-IBM  w-fit md:text-[3vw] md:mr-16 text-[6vw] font-semibold'>
            <h1>Do <span className='text-green-400 underline'>I Qualify?</span></h1>
        </div>
        <div className='p-6 md:w-fit mx-6 mb-6 bg-gray-100 text-2xl md:max-w-96 w-full font-IBM font-semibold flex rounded-3xl'>
          <span className='h-full mx-4'><CheckSquare size={36} className='my-auto' color='#4ade80'/></span> CIBIL Score of 680 or Higher
        </div>
        <div className='p-6 md:w-fit mx-6 mb-6 bg-gray-100 text-2xl md:max-w-96 w-full font-IBM font-semibold flex rounded-3xl'>
          <span className='h-full mx-4'><CheckSquare size={36} className='my-auto' color='#4ade80'/></span> 8 Months Bank statement
        </div>
        <div className='p-6 md:w-fit mx-6 mb-6 bg-gray-100 text-2xl md:max-w-96 w-full font-IBM font-semibold flex rounded-3xl'>
          <span className='h-full mx-4'><CheckSquare size={36} className='my-auto' color='#4ade80'/></span> Based in the India
        </div>
        <div className='p-6 md:w-fit mx-6 mb-6 bg-gray-100 text-2xl md:max-w-96 w-full font-IBM font-semibold flex rounded-3xl'>
          <span className='h-full mx-4'><CheckSquare size={36} className='my-auto' color='#4ade80'/></span> Idealy 6+ Months in business
        </div>
        <div className='p-6 md:w-fit mx-6 mb-6 bg-gray-100 text-2xl md:max-w-96 w-full font-IBM font-semibold flex rounded-3xl'>
          <span className='h-full mx-4'><CheckSquare size={36} className='my-auto' color='#4ade80'/></span> 100+ in annual revenu
        </div>
        <div className=' p-6 text-2xl cursor-pointer md:mx-0 w-fit mx-auto bg-green-500 rounded-3xl flex items-center rounded-x'>
        <SimpleButton text='APPLY NOW'/>
        <span className='text-black bg-white rounded-2xl p-4'>
            <ArrowRight/>
        </span>
    </div>
    </div>
  )
}

export default Qualift