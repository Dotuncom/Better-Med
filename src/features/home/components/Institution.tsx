import InstitutionCard from '@/components/ui/Card/InstitutionCard'
import background from '../../../assets/background.jpg'
import image1 from '../../../assets/p9-300x300.jpg'
import image2 from '../../../assets/about-3.jpg'
import image3 from '../../../assets/p8-300x300.jpg'
import  type { InstitutionCardProps } from '@/components/ui/Card/InstitutionCard'

const Institution = () => {
    const institutionData:InstitutionCardProps[] =[
        {title:'Monthly Test', price:'88', image:image1},
         {title:'Quarterly Test', price:'98', image:image2},
        {title:'Yearly Test', price:'208', image:image3}

    ]
  return (
    <div className="w-full min-h-screen bg-center" style={{backgroundImage:`url(${background})`}}>
   <div className='max-w-7xl mx-auto px-4 py-10 lg:py-30 space-y-20'>
     <h3 className=" text-2xl md:text-[36px] font-Nuito font-medium text-center">
                  Achieving Better<span className="text-primary"> Health Care</span> on one patient at a time
                </h3>
    <div  className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {institutionData.map((data,idx)=>(
                  <InstitutionCard 
                  key={idx}
                  image={data.image}
                  title={data.title}
                  price={data.price}
                  />
        ))}
    </div>
   </div>
    </div>
  )
}

export default Institution