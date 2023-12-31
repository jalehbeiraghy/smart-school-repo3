import CalendarS from '@/components/main/CalendarS'
import  { React,useState } from 'react'
import Polygan from  '@/components/main/Polygan'
import Slider1 from  '@/components/main/Slider1'
import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight} from 'react-icons/fa';
import Image from 'next/image'
import { Progress, ChakraProvider } from '@chakra-ui/react'
import DrawerFront from '@/components/main/DrawerFront'
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
const schedule = () => {
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
<div className=' h-screen md:h-full w-full flex flex-row md:flex-col'>
  <div className=' w-1/3 md:w-full flex flex-col'> 
  <div className='h-2/5 bg-gray-200 p-4'>
  <div className='  fixed top-1 left-0 z-20 '>
                <button onClick={handleOpen}>
                <RiMenuUnfoldFill className='text-black text-2xl mx-4'/>
                </button>
                <DrawerFront isOpen={isOpen} onClose={handleClose} />
             </div>
      <p className=' text-red-500 font-semibold text-lg p-2'>Exams</p>
      <CalendarS/>
      </div>  
  <div  className='h-3/5 flex flex-col bg-red-400'>
    <div className='h-full w-full bg-blue-800'>
      <div className=' h-1/3 p-2  bg-orange-400 '>
          <Slider1/>
      </div>
  
      <div className=' h-1/3 flex flex-row'>
      <div className='w-1/3'>
          <p className=' text-white font-semibold text-lg p-4 text-center'>Biology Entrance <br></br>Test quize</p>
      </div>
      <div  className='w-1/3 flex justify-center items-center bg-slate-300'>
    <FaLongArrowAltLeft className=' text-red-600 font-semibold text-lg'/>
      </div>
      <div  className='w-1/3 flex justify-center items-center  bg-slate-300'>
      <FaLongArrowAltRight className=' text-red font-semibold text-lg'/>
      </div>
      </div>
      <div className='h-1/3 flex flex-row'>
          <div className=' w-1/2 flex justify-center items-center  bg-white py-4 '>
          <Image src='/images/5.jpg'  width='800' height='600' alt="jaleh" className=' rounded-full h-20 w-20'/>
          </div>
          <div className=' w-1/2 bg-orange-400  justify-center items-center py-4 '>
              <p className=' text-white font-semibold text-lg text-center'> Review your <br></br> passed</p>
              <p className=' text-red-500 font-semibold text-lg text-center'>Exams</p>
          </div>

      </div>
      </div>
      </div>   
   </div>
  
  <div className=' w-2/3  flex flex-col md:w-full'>   
  <div className= ' h-2/5  bg-white flex flex-row justify-center items-center md:flex-col p-4'>
  <p className=' text-red-500 font-semibold text-lg whitespace-nowrap '>My Classes</p>
      <CalendarS/>
      <Polygan/>
      </div>  
 
  <div className='  h-3/5 flex flex-col items-center justify-center p-[2%] space-y-[1%]'>
    
    <div className='w-full  p-[1%] bg-yellow-300 rounded-lg font-semibold text-white'>Biology
    <p className='font-semibold space-y-1'>My Studies</p>
  <Progress  colorScheme='blue'  value={80} />
    
    </div>
    <div className='w-full  p-[1%] bg-pink-300 rounded-lg font-semibold text-white'>Chimistry
    <p className='font-semibold space-y-1'>My Studies</p>
  <Progress  colorScheme='blue'  value={50} />
    </div>
    <div className='w-full   p-[1%] bg-blue-300 rounded-lg font-semibold text-white'>
      
      Math
      <p className='font-semibold space-y-1'>My Studies</p>
  <Progress  colorScheme='blue'  value={70} />
      </div>
    <div className='w-full   p-[1%] bg-gray-300 rounded-lg font-semibold text-white'>Physices
    <p className='font-semibold space-y-1'>My Studies</p>
  <Progress  colorScheme='blue'  value={30} />
    </div>
    <div className='w-full   p-[1%] bg-gray-500 rounded-lg font-semibold text-white'>Art
    <p className='font-semibold space-y-1'>My Studies</p>
  <Progress  colorScheme='blue'  value={50} />
    </div>

  </div>
     
    </div>
</div>
</ChakraProvider>
</div>
  )
}

export default schedule
