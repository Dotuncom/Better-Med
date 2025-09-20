import { GoVideo } from "react-icons/go";
import heart from "../assets/heart.png";
import video from "../assets/woman-doctor.jpg";
const About = () => {
  return (
    <div className="w-full ">
      <section className=" relative  lg:min-h-screen bg-contain bg-no-repeat text-center py-6  flex  flex-col items-center   bg-center">
        <div className="w-70 h-40 absolute ">
          <img src={heart} className="h-full w-full bg-contain " alt="" />
        </div>
        <h3 className="text-[36px] font-Nuito font-medium ">
          Patient<span className="text-primary"> About </span> Better Medical
        </h3>
        <h5 className="tracking-5 text-[20px] text-gray-700 ">
          with over 15 years of Experience
        </h5>
      </section>
      <section className="  lg:min-h-screen  bg-primary ">
        <div className=" aflex items-center justify-center inset-0">
              <GoVideo
                className="bg-primary text-white p-4 rounded"
                size={80}
              />
            </div>
          </div>
           
        </div>
       <h2 className="text-4xl font-bold">Dont fuss get Meds from us at Better Med</h2>
      </section>
    </div>
  ); 
};

export default About;
