import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Polygon from '@/components/main/Polygan'

const dashboard = () => {
  return (
    <div>
        <div className=' h-screen md:h-full w-full flex  flex-row md:flex-col-reverse'>
           
            <div className=' md:h-1/3 w-1/2 md:w-full flex justify-center items-center '>
            <div className='  grid grid-cols-2  md:p-[10%] gap-8 '>
                
               
                       <Link href='/dashboard_s'>
                        <div className=' bg-gray-300   flex justify-center items-center   rounded-lg '>
                        <p className=' text-center text-gray-600 text-2xl font-bold p-10'> Student </p>
                        </div>
                        </Link>
                    
                    <div className=' bg-gray-400 flex justify-center items-center    rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold p-10'> Teacher </p>
                    </div>
                    <div className=' bg-gray-400 flex justify-center items-center    rounded-lg '>
                        <p className=' text-center  text-white text-2xl font-bold p-10'> Parents </p>
                    </div>
                    <div className=' bg-gray-200 flex justify-center items-center    rounded-lg  '>
                        <p className=' text-center text-gray-600 text-2xl font-bold p-10'> Admin </p>
                    </div>

                </div>
                </div>
                <div className=' md:h-2/3 w-1/2  md:w-full flex flex-col '>
                

                <div className=' h-3/5 bg-orange-300'>
                <Image src='/images/4.jpg' width='800' height='600' alt="ceo" 
                className='w-full h-full object-over '/> 
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
            <div className=' w-1/2 bg-yellow-500 flex items-center justify-center p-2 '> 
            <Polygon/>
             </div>
            </div> 

            </div>
            </div>
       

    </div>
  )
}

export default dashboard