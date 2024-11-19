import { ArrowRight } from 'lucide-react'
import React from 'react'

function WhiteButton({text}) {
  return (
    <div className='rounded-2xl font-semibold px-6 py-4 flex justify-between border-green-400 border-2 bg-white font-IBM text-'>
        {text}
        <ArrowRight className='ml-2'/>
    </div>
  )
}

export default WhiteButton