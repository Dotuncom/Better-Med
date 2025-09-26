import MainContent from '@/features/medical-products/MainContent';
import SideBar from '@/layout/SideBar';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Shop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar for Desktop */}
      <div className='hidden fixed h-full left-0 lg:block w-64 flex-shrink-0'>
        <SideBar />
      </div>

      {/* Main Content Area */}     
      <div className='flex-grow lg:ml-64 p-4 relative'>
        <MainContent />
      </div>

      {/* Mobile Menu Button */}
      <div className='fixed top-4 right-4 z-50 lg:hidden'>
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SideBar />
      </div>

      {/* Overlay to close sidebar on click outside */}
      {open && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-30 lg:hidden'
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Shop;