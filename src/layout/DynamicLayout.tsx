import { Outlet } from 'react-router-dom'
import slide2 from '../assets/slider3.jpg'
import BreadCrumb from './BreadCrumb'


const DynamicLayout = () => {
  return (
     <div className='relative flex flex-col space-y-'>
      <div className=' bg-cover flex  bg-center min-h-60' style={{backgroundImage:`url(${slide2})`}}>
        <div className='container mx-auto px-4 pt-20 flex justify-between flex-col '>
         <h1 className=' text-3xl text-gray-700 font-medium font-Roboto'>Services</h1>
         <div className=' bg-white  flex items-center justify-center gap-1 min-h-12 text-baset text-primary w-40'>
         
          <BreadCrumb/>
        </div>
        </div>
        
      </div>
      
      

      <div className='flex-grow    '>
    
        <Outlet/>
      </div>
  
    </div>
  )
}

export default DynamicLayout