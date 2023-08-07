import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Polar from '@/components/main/Polar'
import Polygon from '@/components/main/Polygan'

const dashboard = () => {
  return (
    <div>
        <div className=' min-h-screen w-full flex  flex-row md:flex-col-reverse'>
           
            <div className='   w-3/5 md:w-full '>
            <div className='  grid grid-cols-2 p-[30%] md:p-[10%] gap-2 '>
                
               
                       <Link href='/dashboard_s'>
                       
                        <div className=' bg-gray-300 flex justify-center items-center p-[20%]  rounded-lg '>
                        <p className=' text-center text-gray-600 text-2xl font-bold'> Student </p>
                        </div>
                        </Link>
                    
                    <div className=' bg-gray-400 flex justify-center items-center p-[20%]   rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold'> Teacher </p>
                    </div>
                    <div className=' bg-gray-400 flex justify-center items-center p-[20%]   rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold'> Parents </p>
                    </div>
                    <div className=' bg-gray-200 flex justify-center items-center p-[20%]   rounded-lg  '>
                        <p className=' text-center text-gray-600 text-2xl font-bold'> Admin </p>
                    </div>

                </div>
                </div>
                <div className='  w-2/5  md:w-full flex flex-col '>
                

                <div className=' h-3/5 bg-orange-300'>
                <Image src='/images/3.jpg' width='800' height='600' alt="ceo" className='w-full h-full object-cover  '/> 
                </div>
                <div className=' flex h-2/5 '>
            
            <div className=' w-1/2 flex flex-col'>
                <div className=' h-1/3 bg-red-600 w-full flex justify-center items-center' > 
                <p className=' text-center  text-white text-2xl font-bold'> Start today </p>
                </div>
                <div className=' h-2/3 bg-gray-200 flex items-center justify-center'>
                    <p className='font-bold text-xl text-center text-red-600'>No Blind Spot </p> 
                    </div>
            </div>
            <div className=' w-1/2 bg-yellow-500 flex items-center justify-center '> 
            <Polygon/>
             </div>
            </div> 

            </div>
            </div>
       

    </div>
  )
}

export default dashboard