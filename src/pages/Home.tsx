import ServiceCard from "../components/ui/Card/ServiceCard";
import Herosection from "../features/home/components/Herosection";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import femaleDoctor from "../assets/woman-doctor.jpg";
import heart from "../assets/heart.png";
import { FaCheck } from "react-icons/fa";
import Gap from "../components/ui/Gap";
import CounterCard from "../components/ui/Card/CounterCard";
// import ExperienceDoctor from "@/features/home/components/ExperienceDoctor";
import OneStopCare from "@/features/home/components/OneStopCare";
import Footer from "@/layout/Footer";
// import ExperienceAndReach from '../features/home/ExperienceAndReach'
// import Technology from "@/features/home/components/Technology";
// import Institution from "@/features/home/components/Institution";

type serviceProps = {
  id: number;
  name: string;
  path: string;
};

type Task = {
  id: number;
  title: string;
  checked?: boolean;
};

const services: serviceProps[] = [
  { id: 1, name: "Digestive System", path: icon1 },
  { id: 2, name: "Urologist Clinic", path: icon2 },
  { id: 2, name: "Cardiologist Clinic", path: icon3 },
  { id: 2, name: "Endocrinologist Clinic", path: icon4 },
  { id: 2, name: "Dentistry Clinic", path: icon5 },
  { id: 2, name: "Dentistry Clinic", path: icon5 },
];

const tasks: Task[] = [
  { id: 1, title: "Scheduling patient", checked: true },
  { id: 2, title: "Preparing blood", checked: true },
  { id: 3, title: "Taking and recording", checked: true },
  { id: 4, title: "Electronic records", checked: true },
  { id: 5, title: "Replacement recovery", checked: true },

  { id: 6, title: "Preparing patients", checked: true },
  { id: 7, title: "Patients medications", checked: true },
  { id: 8, title: "Helping physicians", checked: true },
  { id: 9, title: "Information insurance", checked: true },
  { id: 10, title: "Ostomy and Continence", checked: true },
];

const Home = () => {
  return (
    <div className="relative">
      <Herosection />
      <section className="relative min-h-screen  bg-primary">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 place-items-center place-content-stretch py-2 gap-y-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.path}
                title={service.name}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-[70%]">
          <img src={heart} alt="" />
        </div>
      </section>
      <section className="  w-full z-40   min-h-screen">
        <div className="flex w-full flex-col-reverse bg-primary md:bg-transparent md:flex-row lg:gap- ">
          <div className="max-w- lg:w-[1500px] max-h-1/2">
            <img src={femaleDoctor} className="w-full h-full bg-cover" alt="" />
          </div>
          <div className="text-white w-full lg:text-gray-700 border-t  pl- border-white lg:border-none ">
            <div className="text-white bg-primary w-full px-4 md:text-gray-400">
              <h3 className="text-[26px] font-Nunito">Fast and Professional</h3>
              <h1 className="text-[40px] font-bold font-Nunito">
                Why Choose Medical
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 mt-4 lg:mt-30 gap-2 lg:gap-8 ">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex hover:translate-x-5 active:translate-x-5  hover:text-primary p-1 text-[18px] md:text-gray-700 text-white items-center space-x-2"
                >
                  <h1 className="bg-accent  p-1 text-white flex items-center justify-center  h-5 w-5">
                    <FaCheck size={20} />
                  </h1>
                  <span>{task.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Gap />
      <section>
        <div
          className="bg-no-repeat bg-center min-h-60 p-20"
          style={{ backgroundImage: `url(${heart})` }}
        >
          <div className="flex flex-col text-gray-700 items-center justify-center gap-4 ">
            <h1 className="text-center text-4xl font-bold">
              We take <span className="text-primary"> the Time </span>you need
            </h1>
            <h3 className="text-[18px] text-center">
              Best with over 15years of Experience
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 p-10">
          <CounterCard end={88} suffix="+" title="Expert personal" />
          <CounterCard end={37} suffix="+" title="Years of Experience" />
          <CounterCard end={18} suffix="K" title="Satisfy customers" />
        </div>
      </section>
      <Gap />
      <section className="">
        <div className="hidden lg:block border-b border-b-gray-500 p-4">
          <div className="flex  text-gray-700 justify-evenly p-4 ">
            <button className=" border-b-2 p-2 border-b-primary relative">
              Experience and reach
              <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
            </button>
            <button className=" border-b-2 p-2 border-b-primary relative">
              Technology
              <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
            </button>
            <button className=" border-b-2 p-2 border-b-primary relative">
              Institution
              <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
            </button>
            <button className=" border-b-2 p-2 border-b-primary relative">
              Experience doctors
              <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
            </button>
            <button className=" border-b-2 p-2 border-b-primary relative">
              One-stop care
              <div className=" absolute  top-0 bottom-0  left-1/2 -translate-x-1/2 border-l-5   border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-primary "></div>
            </button>
          </div>
        </div>
        {/* <ExperienceAndReach/> */}
        {/* <Technology/> */}
        {/* <Institution/> */}
        {/* <ExperienceDoctor/> */}
        <OneStopCare/>
      </section>
    </div>
  );
};

export default Home;
