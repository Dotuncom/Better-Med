import { Button } from "@/components/ui/button";
import background from "../../assets/background.jpg";
import ExperienceDoctor from "../../assets/experience-doctor.jpg";
import { FaArrowRight } from "react-icons/fa";
import Gap from "@/components/ui/Gap";
import heart from "../../assets/heart.png";
import surgeon from "../../assets/about-1.jpg";
import doctor from "../../assets/p10-600x480.jpg";
const ExperienceAndReach = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row">
          <div className="max-w-2xl text-center lg:text-left px-4 space-y-8">
            <div className="text-gray-700 space-y-4">
              <h3 className="text-4xl font-Nuito font-medium">
                Experience and <span className="text-primary">Reach</span>
              </h3>
              <h4 className="tracking-5 text-2xl">
                The medical reach experience with Knowledge
              </h4>
            </div>
            <div className=" space-y-5 lg:space-y-19">
              <p className="text-gray-700 leading-10 text-base">
                Physicians, scientists and other medical experts dedicate a
                portion of their clinical time to this site, we are in the
                unique position to give you access to the knowledge and
                experience of Medical Physicians, scientists and other medical
                experts dedicate a portion of their clinical time to this site.
              </p>

              <Button className="text-white font-Nunito font-bold">
                Read more Details <FaArrowRight />
              </Button>
            </div>
          </div>
          <div>
            <img
              src={ExperienceDoctor}
              className="h-full w-full"
              alt="experience doctors"
            />
          </div>
        </div>
      </div>
      <section className="min-h-90 lg:w-[85%] bg-primary flex flex-col lg:flex-row items-center space-y-8 text-white px-10 py-4 justify-between ">
        <div className="flex flex-col text-center lg:text-left ">
          <h1 className="text-2xl lg:text-[40px] font-Nunito font-bold ">
            Experienced doctors in <span>every specialty</span>
          </h1>
          <h3 className="text-[22px] font-Nunito">
            {" "}
            Medical Clinic doctors cover virtually every specialty and
            subspecialty.
          </h3>
        </div>
        <div className="lg:absolute lg:left-[65%] lg:translate-x-1/2">
          <button className="bg-white w-60 h-20 z-12 text-gray-800 flex flex-col justify-center font-bold text-[20px] shadow-2xl rounded hover:bg-accent hover:text-white transition-colors ease-in-out ">
            Book an Appointment
            <span className="text-base text-gray-400 font-normal">
              Apply now for free
            </span>
          </button>
        </div>
      </section>
      <Gap />
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-10">
        <div className="flex lg:flex-row  flex-col gap-2  lg:gap-8">
          <div className="max-w-md min-h-120">
            <div className=" text-center lg:text-left px-4 space-y-8">
              <div
                className="text-gray-700 space-y-4 bg-cover"
                style={{ backgroundImage: `url(${heart})` }}
              >
                <h3 className="text-[36px] font-Nuito font-medium">
                  Patient<span className="text-primary"> Online</span> services
                </h3>
                <h5 className="tracking-5 text-[20px] ">
                  Manage all your Appointments
                </h5>
              </div>
              <div className=" space-y-5 lg:space-y-19">
                <p className="text-gray-700 leading-8 text-base">
                  Physicians, scientists and other medical experts dedicate
                  their clinical time to this site, we are in unique position to
                  give you access to the knowledge and experience of Medical.
                </p>

                <Button className="text-white font-Nunito font-bold">
                  Read more Details <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-grow gap-4 ">
            <div className="w-90 max-h-100 ">
              <img
                src={surgeon}
                className="w-full h-full bg-center bg-cover"
                alt=""
              />
            </div>
            <div className="w-90 max-h-100 place-content-center">
              <img src={doctor} className="w-full h-full  bg-cover" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceAndReach;
