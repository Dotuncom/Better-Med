import ServiceCard from "../components/ui/Card/ServiceCard";
import Herosection from "../features/home/components/Herosection";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import femaleDoctor from "../assets/woman-doctor.jpg";
import heart from '../assets/heart.png'
type serviceProps = {
  id: number;
  name: string;
  path: string;
};
const services: serviceProps[] = [
  { id: 1, name: "Digestive System", path: icon1 },
  { id: 2, name: "Urologist Clinic", path: icon2 },
  { id: 2, name: "Cardiologist Clinic", path: icon3 },
  { id: 2, name: "Endocrinologist Clinic", path: icon4 },
  { id: 2, name: "Dentistry Clinic", path: icon5 },
  { id: 2, name: "Dentistry Clinic", path: icon5 },
];

const Home = () => {
  return (
    <div className="relative">
      <Herosection />
      <section className="relative min-h-[120vh] bg-primary">
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
      <section className="lg:absolute  w-full bottom-1/2 top-full lg:top-[70%] lg:translate-y-1/2 z-20   min-h-screen">
        <div className="flex flex-col-reverse bg-primary md:bg-transparent md:flex-row lg:gap-8 ">
          <div className="max-w-md max-h-2xl">
            <img src={femaleDoctor} alt="" />
          </div>
          <div className="lg:text-white text-gray-700 px-4">
            <div>
              <h3 className="text-[26px] font-Nunito">Fast and Professional</h3>
              <h1 className="text-[40px] font-bold font-Nunito">
                Why Choose Medical
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
