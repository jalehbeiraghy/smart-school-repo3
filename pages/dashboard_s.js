import React, { useState } from 'react'
import Polar from '@/components/main/Polar'
import Polygon from '@/components/main/Polygan'
import Line from '@/components/main/Line'
import Image from 'next/image'
import CalendarS from '@/components/main/CalendarS'
import SliderP from '@/components/main/SliderP'
import Slider1 from '@/components/main/Slider1'
import DrawerFront from '@/components/main/DrawerFront'
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import Link from 'next/link'
import { Progress, ChakraProvider } from '@chakra-ui/react'



const dashboard_s = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <div>
      <ChakraProvider>
      <div className=' max-h-screen w-full flex flex-row md:flex-col'>
        <div className=' w-3/5 md:w-full flex flex-row'>
       
        

        <div className=' w-full'>
          
        <div className=' h-4/6 w-full flex'>
        <div className=' w-1/2 bg-gray-200 flex flex-col '>
          <div className=' w-full h-1/2 flex flex-row  space-y-2 border-b-2 border-b-white'>
         <div className=' w-1/3 h-full flex flex-col justify-center items-center'>
          
         <div className=' items-center my-1 justify-center'>
                <button onClick={handleOpen}>
                <RiMenuUnfoldFill className='text-black text-2xl mx-4'/>
                </button>
                <DrawerFront isOpen={isOpen} onClose={handleClose} />
             </div>

          <p className=' font-bold'> Teammates </p>
          <div className=' w-1/2 bg-white p-2 rounded-lg flex justify-center  items-center text-center font-semibold'>
          
            sara
            amir
            sanaz
            farzad
            kivan
            

          </div>
         </div>
         <div className=' w-2/3  flex flex-col items-center justify-center space-y-2'>
          <Image src='/images/5.jpg'  width='800' height='600' alt="jaleh" className=' rounded-full h-20 w-20'/>
          <div className='  bg-white p-2 rounded-lg flex justify-center  items-center text-center font-semibold'>
          ----- chat room -----

          </div>
         </div>

          </div>
          <div className=' w-full h-1/2  '>
            <div className='flex justify-center items-center w-full h-full '><Polar/></div>
            
          </div>

        </div>
        <div className=' w-1/2 flex flex-col  '>
        <div className=' w-full h-1/2 border-b-2 border-b-gray-200'>
         <CalendarS/>
         </div>
         <div className=' w-full h-1/2  '>
           <div className='flex justify-center items-center w-full h-full p-2 '><Polygon/></div>
           
         </div>
        </div>
        </div>
        <div className=' h-2/6 bg-gray-200 flex flex-col'>
          <div className=' h-1/3 p-1'><SliderP/></div>
         <div className=' h-2/3'> <Slider1/> </div>
        </div>
          </div> 

        </div>
        
        <div className='   w-2/5 md:w-full'>
        <div className=' h-2/6 w-full bg-gray-500 '>
       <Line/>
        </div>
        <div className=' bg-gray-200 h-1/6 w-full  p-[5%]'>
          <p className='font-semibold space-y-2'>My Studies</p>
        <Progress  colorScheme='blue'  value={80} />
          </div>
        <div className=' h-3/6 w-full flex'>
                          <div className=' w-2/3 bg-gray-400 flex flex-col items-center justify-center p-[5%] space-y-[5%]'>
          <div className='w-full p-[5%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology</div>
          <div className='w-full p-[5%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry</div>
          <div className='w-full p-[5%] bg-blue-300 rounded-lg font-semibold text-white'>Math</div>
          <div className='w-full p-[5%] bg-gray-300 rounded-lg font-semibold text-white'>Physices</div>
          <div className='w-full p-[5%] bg-gray-500 rounded-lg font-semibold text-white'>Art</div>

        </div>
        <div className='w-1/3 bg-gray-300 flex flex-col px-[20%] font-semibold justify-center items-center scrollbar-hide overflow-auto '>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>
         <p>lesson1</p>


          




        </div>
        </div>
        </div>
      </div>
      </ChakraProvider>
    </div>
  )
}

export default dashboard_s