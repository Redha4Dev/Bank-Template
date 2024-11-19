
import React from 'react'
import SimpleButton from './SimpleButton'
import { ArrowRight } from 'lucide-react'

function HeroButton({text}) {
  return (
    <div className='py-[2px] px-[2px] cursor-pointer md:mx-0 mx-auto  border-2 border-green-500 w-fit flex items-center rounded-xl bg-white'>
        <SimpleButton text={text}/>
        <span className='text-black px-4'>
            <ArrowRight/>
        </span>
    </div>
  )
}

export default HeroButton