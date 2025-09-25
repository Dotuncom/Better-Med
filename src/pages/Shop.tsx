import MainContent from '@/features/medical-products/MainContent'
import SideBar from '@/layout/SideBar'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const shop = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative flex min-h-screen'>
      <div className='hidden lg:block'>
      <SideBar/>
 
      </div>
      <div className="rounded w-full flex justify-between flex-wrap">
        <MainContent/>
      </div>

      <div className="lg:hidden">
        <button onClick={()=>{setOpen(!open)}}>
          {open? <FaTimes size={30} />: <FaBars size={30} /> }
        </button>

      </div>
      <div className={`absolute w-full fixe z-20 min-h-screen left-0 right-0  lg:hidden ${open ? 'translate-x-0':'-translate-x-full'} `}>
      <SideBar/>
 
      </div>
     
    </div>
  )
}

export default shop 