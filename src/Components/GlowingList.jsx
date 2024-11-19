import React from 'react'

function GlowingList() {
  return (
    <div className="text-white md:w-[20%] flex justify-center  w-full text-2xl font-IBM">
        <ul className="text-2xl">
            <li className="my-20 relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-green-500 before:shadow-[0_0_8px_rgba(34,197,94,0.6)]"> Fast, easy loan application</li>
            <li className="my-20 relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-green-500 before:shadow-[0_0_8px_rgba(34,197,94,0.6)]"> Flexible repayment options</li>
            <li className="my-20 relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-green-500 before:shadow-[0_0_8px_rgba(34,197,94,0.6)]"> Compatitive interest rates</li>
        </ul>
    </div>
  )
}

export default GlowingList