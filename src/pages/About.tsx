import { GoVideo } from "react-icons/go";
import heart from "../assets/heart.png";
import video from "../assets/woman-doctor.jpg";
import CounterCard from "@/components/ui/Card/CounterCard";
import Gap from "@/components/ui/Gap";
const About = () => {
  return (
    <div className="w-full ">
      <section className=" relative  lg:h-120 bg-contain bg-no-repeat text-center  py-12  flex  flex-col items-center   bg-center">
        <div className="w-70 h-40 absolute  ">
          <img src={heart} className="h-full w-full bg-contain " alt="" />
        </div>
        <h3 className="text-[36px] font-Nuito font-medium text-gray-700">
          Patient<span className="text-primary"> About </span> Better Medical
        </h3>
        <h5 className="tracking-5 text-[20px] text-gray-700 ">
          with over 15 years of Experience
        </h5>
      </section>
      <section className="  lg:min-h-screen flex flex-col items-center bg-primary pb-20 pt-10  text-gray-700">
        <div className="lg:absolute lg:-translate-y-1/2 ">
          <div className=" relative h-130 max-w-[800px] hover:scale-105">
            <img src={video} className="bg-contain h-full w-full" alt="" />
            <div className="absolute flex items-center justify-center inset-0">
              <GoVideo
                className="bg-primary text-white p-4 rounded"
                size={80}
              />
            </div>

          </div>
            
        </div>
        <div className="lg:absolute  text-center mt-10 lg:mt-80">
  <h2 className="text-4xl  text-white font-bold">Dont fuss get Meds from us at Better Med</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 lg:p-10">
          <CounterCard end={88} suffix="+" title="Expert personal" />
          <CounterCard end={37} suffix="+" title="Years of Experience" />
          <CounterCard end={18} suffix="K" title="Satisfy customers" />
        </div>
        </div>
      </section>

      <Gap/>
    </div>
  ); 
};

export default About;
