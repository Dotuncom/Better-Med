import { FaSearch } from 'react-icons/fa'

type ExperienceDoctorCardProps ={
    image:string
    isLarge?:boolean
}
const ExperienceDoctorCard = ({image,isLarge=false}:ExperienceDoctorCardProps) => {

  return (
    <div className={` flex  justify-center px-auto overflow-hidden rounded-2xl p-4`}>
         <div className={`relative border border-accent/50 group w-70 h-[250px] hover:scale-105 overflow-hidden ${isLarge ?'md:w-150  md:h-[500px]':''} rounded  bg-cover bg-center bg-no-repeat transition-all delay-300 duration-500 ease-in-out`} style={{backgroundImage:`url(${image})`}}>
       <div className='absolute inset-0 group-hover:bg-accent/60 group-active:bg-accent/60 z-4 rounded flex items-center justify-center '> <FaSearch  size={60} className='z-40 hidden group-hover:block text-white'/> </div>

    </div>
    </div>
   
  )
}

export default ExperienceDoctorCard