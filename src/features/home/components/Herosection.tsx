// import { useState } from 'react';
import slider1 from  '../../../assets/slider3.jpg'
// import Header from '../../../layout/Header'
import heart from '../../../assets/heart.png'

const Herosection = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };
  return (
    
    <div
      className='h-105 sticky lg:min-h-screen  border-primary  bg-cover bg-center lg:py-20'
      style={{ backgroundImage: `url(${slider1})` }}
    >

     <div className='max-w-7xl mx-auto lg:mt-20z pb-8  py-2 px-4'>
      <div className='max-w-[270px] md:max-w-md lg:max-w-2xl space-y-4 rounded-br-2xl'>
<img src={heart} alt="heart" className='w-12 h-10 lg:hidden' />

         <h3 className='text-2xl w-28 md:w-full text-accent'> WE ARE MEDICAL</h3>
     <h3 className='text-base md:text-[30px] mt-4 lg:text-[60px] font-bold'>
      Miracle Made Daily
     </h3>
   <p className='text-base md:text-[22px] leading-8 lg:leading-10  text-gray-700'>
saving all People through exemplary 
health care, education research and community outreach  

     </p>
      </div>
    

     </div>
    </div>
  )
}

export default Herosection