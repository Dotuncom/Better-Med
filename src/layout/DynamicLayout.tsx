import { Outlet, useLocation } from 'react-router-dom'
import slide2 from '../assets/slider3.jpg'
import BreadCrumb from './BreadCrumb'


const DynamicLayout = () => {
  const location = useLocation()
  const pathname = location.pathname.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
     <div className='relative flex flex-col space-y- mb-12'>
      <div className=' bg-cover flex  bg-center min-h-60' style={{backgroundImage:`url(${slide2})`}}>
        <div className='container mx-auto px-4 pt-20 flex justify-between flex-col '>
         <h1 className=' text-3xl text-gray-700 font-medium font-Roboto'>{pathname}</h1>
         <div className=' bg-white  flex items-center justify-center gap-1 min-w-60 max-w-80 min-h-12 text-base text-primary '>
         
          <BreadCrumb/>
        </div>
        </div>
        
      </div>
      
      

      <div className='relative flex-grow mb-10    '>
    
        <Outlet/>
      </div>
  
    </div>
  )
}

export default DynamicLayout