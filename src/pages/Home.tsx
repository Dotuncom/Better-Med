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

export const tasks: Task[] = [
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
      <section className="relative min-h-screen lg:min-h-[120vh] bg-primary">
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
      <section className="lg:absolute  w-full bottom-1/2 top-full lg:top-[70%] lg:translate-y-1/2 z-40   min-h-screen">
        <div className="flex flex-col-reverse bg-primary md:bg-transparent md:flex-row lg:gap-8 ">
          <div className="max-w-md max-h-2xl">
            <img src={femaleDoctor} alt="" />
          </div>
          <div className="text-white lg:text-gray-700 border-t  py-2 border-white lg:border-none  px-4">
            <div className="text-white md:text-gray-400">
              <h3 className="text-[26px] font-Nunito">Fast and Professional</h3>
              <h1 className="text-[40px] font-bold font-Nunito">
                Why Choose Medical
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  mt-4 lg:mt-12 gap-2 lg:gap-4 ">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex hover:translate-x-5 active:translate-x-5 md:text-gray-700 text-white items-center space-x-2"
                >
                  <h1 className="bg-accent  p-1 text-white flex items-center justify-center  h-5 w-5">
                    <FaCheck size={20} />
                  </h1>{" "}
                  <span>{task.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='absolute bg-red-700 min-h-screen'>
        <div className="flex items-center h-md " style={{background:`url(${heart})`}} >

        </div>

      </section>
      
    </div>
  );
};

export default Home;
