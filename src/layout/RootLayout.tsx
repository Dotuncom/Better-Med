import  { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
    <Header
    isMobileMenuOpen={isMobileMenuOpen}
    toggleMobileMenu={toggleMobileMenu}/>
<Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout