import { BriefcaseBusiness, Copyright, Phone } from 'lucide-react'
import React from 'react'

function FinalePage() {
  return (
    <div className='mt-24 px-24 py-12 grid font-IBM grid-cols-5 gap-4'>
        <div className='col-span-5 md:col-span-2'>
            <h1 className='text-green-400 font-semibold text-3xl'>XENON</h1>
            <p className='text-xl text-gray-500 my-6'>Xenon is specializes in providing business leans to small and meudim-sized businesses in their local area.</p>
            <div className='w-[80%] md:w-[60%] my-4 bg-white rounded-xl flex items-center p-4 text-2xl font-semibold'>
                <span className='mx-4 text-green-400'><BriefcaseBusiness/></span>    Support@xnonbank.com
            </div>
            <div className='w-[80%] md:w-[60%] my-4 bg-white flex items-center rounded-xl p-4 text-2xl font-semibold'>
                <span className='text-green-400 mx-4'><Phone/></span> +213 123456789
            </div>
        </div>
        <div className='md:col-span-1 col-span-5 mb-4'>
            <h1 className='text-2xl font-semibold'>Company</h1>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Home</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>About us</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Products</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Why Choose Us</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Impact on Society</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Testimonials</p>

        </div>
        <div className='md:col-span-1 col-span-5 mb-4'>
            <h1 className='text-2xl font-semibold'>Explore</h1>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>FAQ</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>How it Works</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Qualifications</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Tool kits</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Market Place</p>

        </div>
        <div className='md:col-span-1 col-span-5 mb-4'>
            <h1 className='text-2xl font-semibold'>Quick Links</h1>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Apply Now</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Contect Us</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Blog</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Privacy Policy</p>
            <p className='text-xl my-3 cursor-pointer text-gray-500'>Terms of Service</p>
            
        </div>
        <hr className='col-span-5'/>
        <div className='col-span-5 flex items-center text-l mt-12 justify-center text-gray-600'>
            <Copyright/> xenonbank 2025, All rights reserved
        </div>
    </div>
  )
}

export default FinalePage