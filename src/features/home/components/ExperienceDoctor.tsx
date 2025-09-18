import ExperienceDoctorCard from '@/components/ui/Card/ExperienceDoctorCard'
import background from '../../../assets/background.jpg'
import image1 from '../../../assets/about-3.jpg'
import image2 from '../../../assets/p10-600x480.jpg'
import image3 from '../../../assets/p9-300x300.jpg'
import image4 from '../../../assets/p8-300x300.jpg'
import image5 from '../../../assets/p6-600x480.jpg'
const ExperienceDoctor = () => {
  return (
    <div  className="w-full min-h-screen py-8 bg-center" style={{backgroundImage:`url(${background})`}}>
        <div className='max-w-7xl mx-auto px-4 py-4'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                <div>
                    <ExperienceDoctorCard image={image1}/>
                    <ExperienceDoctorCard image={image4}/>
                </div>
                <div>
                    <ExperienceDoctorCard isLarge={true} image={image2}/>
                </div>
                <div>
                    <ExperienceDoctorCard image={image5}/>
                    <ExperienceDoctorCard image={image3}/>
                </div>
   
            </div>


        </div>

        </div>
  )
}

export default ExperienceDoctor