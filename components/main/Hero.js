import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Polygon from './Polygan'
import Line from './Line'
import Polar from './Polar'
const hero = () => {
  return (
    <div>
     <div className='  flex flex-row  md:flex-col-reverse'>

        <div className=' w-2/5 md:w-full bg-gray-100 flex-col '>
           <div className=' h-2/5'>
            <div className=' w-1/3 flex-col h-full '>
                <div className=' h-1/2 bg-orange-400 flex justify-center items-center '>
                    <p className=' font-bold text-lg text-center'> Fast school </p>
                </div>
                
                <div className=' flex h-1/2'>
                    <div className=' bg-blue-300 w-1/2 flex justify-center items-center'> icon </div>
                    <div className=' bg-purple-300 w-1/2 flex justify-center items-center '> to </div>
                 
            </div>

            </div>
            </div> 
           <div className=' bg-slate-200  h-1/5 flex items-center justify-center p-10'>
            <p className=' font-bold text-3xl text-center text-slate-500'> LEARN DEEP </p>
            </div> 
           <div className=' flex h-2/5 '>
            <div className=' w-1/2 bg-yellow-500 flex items-center justify-center '> 
            <div className='w-full h-full flex justify-center items-center'>
            <Polygon/>  

            </div>
             </div>
            <div className=' w-1/2 flex flex-col'>
                <div className=' h-1/3 bg-yellow-800 w-full flex justify-center items-center' > ARROW KEYS</div>
                <div className=' h-2/3 flex items-center justify-center'>
                    <Link href='/dashboard'>
                    <p className='font-bold text-xl text-center text-slate-400'>EXPLOR ALL </p> 
                    </Link>
                    </div>
            </div>
            </div> 
        </div>

        <div className='  p-[5%] space-x-[5%]  w-3/5 md:w-full bg-slate-300 grid grid-cols-2 md:grid-cols-1 md:space-x-[0%] space-y-[5%] '>
            <div className=' relative  row-span-3 bg-slate-500 rounded-lg '>
                <Image src='/images/4.jpg' width='800' height='600' alt="ceo" className=' object-cover   h-full object-center rounded-lg'/> 
                <div className='  w-full py-7 space-y-3 absolute bottom-0 bg-white rounded-lg'>
                    <p className='text-center font-bold '> Discover TOP Teachers </p>
                    <div className=' flex justify-around '>
                    <p > Class </p>
                    <p > Reseme </p>
                    <p > Profile </p>
                    </div>
                </div>
            </div>
            <div className='  bg-blue-500 rounded-lg flex items-center justify-center  object-contain'>
            <Image src='/images/2.jpg' width='800' height='600' alt="ceo" className='w-full h-full object-cover  rounded-lg'/> 
            </div>
            <div className='  bg-green-500 my-4 space-x-[5%]rounded-lg items-center justify-center '>
            <Image src='/images/3.jpg' width='800' height='600' alt="ceo" className='w-full h-full object-cover  rounded-lg'/> 
            </div>
            <div className='  bg-purple-500 rounded-lg items-center justify-center'>
            <Image src='/images/2.jpg' width='800' height='600' alt="ceo" className='w-full h-full object-cover  rounded-lg'/> 
            </div>

            

        </div>

     </div>
    </div>
  )
}

export default hero