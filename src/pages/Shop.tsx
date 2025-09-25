import MainContent from '@/features/medical-products/MainContent'
import SideBar from '@/layout/SideBar'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const shop = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative flex w-full justify-between h-screen'>
      <div className='z-60 w-64 fixed  h-full hidden lg:block'>
      <SideBar/>
 
      </div>
      <div className="flex-grow ml-0  lg:ml-64 p-4 relative rounded w-full flex flex-wrap">
        <MainContent/>
      </div>

      <div className="lg:hidden fixed right-4 top-4 z-50">
        <button onClick={()=>{setOpen(!open)}}>
          {open? <FaTimes size={30} />: <FaBars size={30} /> }
        </button>

      </div>
      <div className={`fixed inset-0 w-[90]  z-20 min-h-scree transform transition-transform duration-300  lg:hidden ${open ? 'translate-x-0':'-translate-x-full'} `}>
      <SideBar/>

      </div>
 
      </div>
     
  )
}

export default shop 