// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import TestimonialCard from '@/components/ui/Card/TestimonialCard'
import background from '../../../assets/background.jpg'
import { testimonials } from '@/datas/testimonial';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CustomerRating = () => {



  return (
    <div className="min-h-screen" style={{backgroundImage:`url(${background})`}}>
        <div className='container flex gap-2 mx-auto py-10 px-4'>
           <Carousel className="w-full h-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full  md:basis-1/2 lg:basis-"
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
            
        </div>
        </div>
  )
}

export default CustomerRating