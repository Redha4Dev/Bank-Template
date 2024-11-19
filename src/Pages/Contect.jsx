import React from 'react'
import HeroButton from '../Components/HeroButton'
import { ArrowUpRight } from 'lucide-react'

function Contect() {
  return (
    <div className='py-12 px-24 ml-8 mt-24 bg-[#12121b] font-IBM gap-4 grid grid-cols-8 rounded-l-[3rem]'>
        <div className='md:col-span-5 col-span-8'>
            <h1 className=' text-[5rem] font-medium text-white'>Ready to Grow Your <span className='text-green-400'>Business</span>?</h1>
            <p className='text-white text-3xl font-medium'>Apply for Business Loan Today!</p>
            <div className='my-12 items-center w-fit flex'>
                <HeroButton text='APPLY NOW'/>
                <p className='text-2xl cursor-pointer flex text-green-400'><span className='underline ml-8 mr-4'>Contect us</span> <ArrowUpRight size={30}/></p>
            </div>
        </div>
        <div className='md:col-span-3 col-span-8 rounded-3xl overflow-hidden'>
             <img src="src/assets/44 Easy Online Business Ideas You Can Start Now.jpeg" alt="" />
        </div>
        <hr className='col-span-8' />
        <div className='col-span-8 py-10 px-12 grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
                <p className='text-green-400 text-3xl cursor-pointer my-10'>Support@xenonbank.com</p>
                <p className='text-green-400 text-3xl cursor-pointer my-10'>Care@xenonbank.com</p>
            </div>
            <div className='col-span-2 md:col-span-1 grid grid-cols-3 gap-4'>
                <div className='cursor-pointer rounded-3xl col-span-3 md:col-span-1 border-[2px] border-gray-400 flex items-center justify-center aspect-square text-3xl font-medium text-white'>
                    Whatsapp
                </div>
                <div className='cursor-pointer rounded-3xl col-span-3 md:col-span-1 border-[2px] border-gray-400 flex items-center justify-center aspect-square text-3xl font-medium text-white'>
                    Telegram
                </div>
                <div className='cursor-pointer rounded-3xl col-span-3 md:col-span-1 border-[2px] border-gray-400 flex items-center justify-center aspect-square text-3xl font-medium text-white'>
                    Twitter
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contect