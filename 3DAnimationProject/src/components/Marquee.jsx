import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden uppercase'>
            <h1 className='text-[35vh] leading-none font-bold pb-5'>we are ochi</h1>
            <h1 className='text-[35vh] leading-none font-bold pb-5'>we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee