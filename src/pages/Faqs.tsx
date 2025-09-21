import heart from "../assets/heart.png";
import doctor from "../assets/woman-doctor.jpg";
import FaqList from "@/components/FaqList";
const Faqs = () => {
  return (
    <div>
      <section className=" relative w-full  lg:min-h-50 bg-contain bg-no-repeat text-center  py-12  flex  flex-col items-center   bg-center">
        <div className="w-70 h-40 absolute  ">
          <img src={heart} className="h-full w-full bg-contain " alt="" />
        </div>
        <h3 className="text-[36px] font-Nuito font-medium text-gray-700">
          Our <span className="text-primary"> Medical </span> Service
        </h3>
        <h5 className="tracking-5 text-[20px] text-gray-700 ">
          with over 15 years of Experience
        </h5>
      </section>

      <section className=" container mx-auto px-4">
        <div className="flex  lg:flex-row flex-col gap-2 ">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
              Have you Question?
              <h4> Feel free to contact us now</h4>{" "}
            </h1>

            <p className="leading-10">
              Please read questions below and if you can not find your answer,
              please send us your question, we will answer you as soon as
              possible.
            </p>
            <h1 className="text-4xl font-Nunito font-bold text-primary">FAQ ?</h1>
            <div>
              <FaqList/>
            </div>
          </div>
          <div className="max-w-md ">
            <img src={doctor} className="w-full h-full bg-contain" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
