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
import Slider_lessons from '../components/main/Slider_lessons'
import Slider_course from '../components/main/Slider_course'

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
      <div className=' max-h-screen w-full flex flex-row lg:flex-col'>
    
        <div className=' w-3/5 lg:w-full lg:h-1/2 flex flex-row'>
        <div className='  fixed top-1 left-0 z-20 '>
                <button onClick={handleOpen}>
                <RiMenuUnfoldFill className='text-black text-2xl mx-4'/>
                </button>
                <DrawerFront isOpen={isOpen} onClose={handleClose} />
             </div>
        

        <div className=' w-full'>
          
        <div className=' h-4/6 w-full flex'>
        <div className=' w-1/2 bg-gray-200 flex flex-col justify-center items-center'>
          <div className=' w-full h-1/2 flex flex-row  space-y-2 border-b-2 border-b-white'>
         <div className=' w-1/3 h-full flex flex-col justify-center items-center '>
          
        

          <p className=' font-bold  w-full text-center whitespace-nowrap'> Teammates </p>
          <div className=' w-1/2 bg-white px-7 rounded-lg flex flex-col justify-center  items-center text-center font-semibold'>
          
            <p>sara</p>
            <p>amir</p>
            <p>sanaz</p>
            <p>farzad</p>
            <p>kivan</p>
           
            
            
            
            

          </div>
         </div>
         <div className=' w-2/3  flex flex-col items-center justify-center space-y-2'>
          <Image src='/images/5.jpg'  width='800' height='600' alt="jaleh" className=' rounded-full h-20 w-20'/>
          <div className='  bg-white p-2 rounded-lg flex justify-center  items-center text-center font-semibold'>
          <p> chat room </p>

          </div>
         </div>

          </div>
          <div className=' w-full h-1/2  '>
            <div className='flex justify-center items-center w-full h-full p-2 '><Polar/></div>
            
          </div>

        </div>
        <div className=' w-1/2 flex flex-col  '>
        <div className=' w-full h-1/2 border-b-2 border-b-gray-200 p-2 flex justify-center items-center'>
         <CalendarS/>
         </div>
         <div className=' w-full h-1/2  '>
           <div className='flex justify-center items-center w-full h-full p-2 '><Polygon/></div>
           
         </div>
        </div>
        </div>
        <div className=' h-2/6 bg-gray-200 flex flex-col'>
          <div className=' h-1/3 p-1'><SliderP/></div>
         <div className='  h-2/3'> <Slider1/> </div>
        </div>
          </div> 

        </div>
        
        <div className='   w-2/5 lg:w-full lg:h-1/2'>
        <div className=' h-2/6 w-full bg-gray-500 '>
       <Line/>
        </div>
        <div className=' bg-gray-200 h-1/6 w-full  p-[5%]'>
          <p className='font-semibold space-y-2'>My Studies</p>
        <Progress  colorScheme='blue'  value={80} />
          </div>



        <div className=' h-3/6  w-full flex flex-row '>
                          <div className=' w-2/3 bg-gray-400  overflow-auto scrollbar-hide'>
                            
                          <Slider_course/>

        </div>
        <div className='w-1/3 bg-green-400 flex flex-col '>
         

        < p className=" text-red-500 font-semibold p-2">My lessons</p>
         
          <div className='  overflow-auto scrollbar-hide'>

             <Slider_lessons/>
          </div>

         

      

          




        </div>
        </div>
        </div>
      </div>
      </ChakraProvider>
    </div>
  )
}

export default dashboard_s