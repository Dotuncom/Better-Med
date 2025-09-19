// src/components/TestimonialCard.tsx
import type { Testimonial } from "@/datas/testimonial";
interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="relative bg-white   max-w-7xl  shadow-lg rounded-xl    h-100  text-center  ">
                

      <div className="flex  z-900 flex-col  items-center justify-center ">
        <div className=" h-30 w-30  absolute  top-0 rounded-full overflow-hidden  left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center ">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className=" h-full w-full  z-90   bg-red-400  border-white shadow-md cover"
          />
        </div>

       <div className="mt-12">
         <h3 className="mt-4 text-lg font-semibold text-blue-600">
          {testimonial.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{testimonial.role}</p>
        <p className="text-gray-700 italic leading-relaxed">
          "{testimonial.quote}"
        </p>
       </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
