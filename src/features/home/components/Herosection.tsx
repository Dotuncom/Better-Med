import { useState } from 'react';
import slider1 from  '../../../assets/slider3.jpg'
import Header from '../../../layout/Header'


const Herosection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    
    <div
      className='h-90 lg:min-h-screen bg-cover bg-center lg:py-20'
      style={{ backgroundImage: `url(${slider1})` }}
    >
        <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
    </div>
  )
}

export default Herosection