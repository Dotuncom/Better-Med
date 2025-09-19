// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import TestimonialCard from '@/components/ui/Card/TestimonialCard'
import background from '../../../assets/background.jpg'
import { testimonials } from '@/datas/testimonial';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel';

const CustomerRating = () => {



  return (
    <div className="min-h-screen" style={{backgroundImage:`url(${background})`}}>
        <div className='container flex gap-2 mx-auto  px-4'>
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