import React from 'react'
import WhiteButton from '../Components/WhiteButton'

function Stories() {
  return (
    <div className='w-full px-24  py-12 font-IBM'>
        <div className='w-full flex justify-between '>
            <h1 className='text-5xl font-semibold'>Real Stories, Real Results</h1>
            <div className='hidden md:block'>
                <WhiteButton text='View all Success stories'/>
            </div>
        </div>
        <div className='w-full mt-16 grid md:grid-cols-6 grid-cols-1 gap-6'>
            <div className='md:col-span-4 rounded-3xl bg-white'>
                <div className='w-full h-[35vw] flex justify-center items-center rounded-3xl bg-gray-300'>
                    <h1 className='text-4xl font-semibold text-gray-400'>Video1</h1>
                </div>
                <div className='p-16'>
                    <h1 className='text-[1.875rem] leading-relaxed font-semibold'>This new capital structure will quickly help us loose the newcomer badge.</h1>
                </div>
            </div>
            <div className='md:col-span-2 grid-rows-2 gap-6 grid '>
                <div className='bg-white rounded-3xl'>
                    <div className='h-[15vw] bg-gray-300 rounded-3xl'>

                    </div>
                    <div className='p-8'>
                        <h1 className='text-xl leading-relaxed font-semibold'>The team was very heplful and responsive throught the process.</h1>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>
                    <div className='h-[15vw] bg-gray-300 rounded-3xl'>

                    </div>
                    <div className='p-8'>
                        <h1 className='text-xl leading-relaxed font-semibold'>Xenon Bank saved my business with quick and easly loan options</h1>
                    </div>
                </div>  
            </div>
        </div>
        <div className='block md:hidden my-12'>
                <WhiteButton text='View all Success stories'/>
        </div>
    </div>
  )
}

export default Stories