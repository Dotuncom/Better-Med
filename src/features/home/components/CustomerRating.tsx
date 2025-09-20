// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import TestimonialCard from '@/components/ui/Card/TestimonialCard'
import background from '../../../assets/background.jpg'
import { testimonials } from '@/datas/testimonial';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel';

const CustomerRating = () => {



  return (
    <div className="min-h-screen py-8" style={{backgroundImage:`url(${background})`}}>
        <div className='container flex flex-col gap-2 mx-auto  space-y-4 px-4'>
          <div className='text-center'>
 <h3 className="text-2xl lg:text-[36px] font-Nuito font-bold text-gray-600">
                  See what said our <span className="text-primary"> Patient and Visitors</span> 
                </h3>
                <h5 className="tracking-5 text-[20px] ">
                  Our goal is your complete health and wellness
                </h5>
          </div>
         
           <Carousel className="w-full h-full">
        <CarouselContent className='h-150 flex items-center'>
          {testimonials.map((testimonial) => (
            <CarouselItem
             
              key={testimonial.id}
              className="basis-full  md:basis-1/2 lg:basis-1/2 shadow-2xs"
            >
              
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute left-1/2 top-0'>
        <CarouselPrevious />
        <CarouselNext />
        </div>

        {/* Navigation buttons */}
       
      </Carousel>
            
        </div>
        </div>
  )
}

export default CustomerRating