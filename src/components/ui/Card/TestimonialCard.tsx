// src/components/TestimonialCard.tsx
import type { Testimonial } from "@/datas/testimonial";
interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }:Props) => {
  return (
    <div className="bg-white   z-20  shadow-lg rounded-xl p-6  overflow-hidden lg:h-100 max-w-2xl mx-auto text-center relative">
      <div className=" h-30 w-30 z-50 absolute top-0  rounded-full overflow-hidden  left-1/2 -translate-y-1/2 flex justify-center ">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className=" h-full w-full  bg-red-400  border-white shadow-md object-contain"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-blue-600">
        {testimonial.name}
      </h3>
      <p className="text-gray-500 text-sm mb-4">{testimonial.role}</p>
      <p className="text-gray-700 italic leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
  );
};

export default TestimonialCard;
