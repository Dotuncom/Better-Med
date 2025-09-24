import MainContent from '@/features/medical-products/MainContent'
import SideBar from '@/layout/SideBar'

const shop = () => {
  
  return (
    <div className='flex min-h-screen'>
      <SideBar/>
      <div className="rounded w-full flex justify-between flex-wrap">
        <MainContent/>
      </div>
    </div>
  )
}

export default shop 