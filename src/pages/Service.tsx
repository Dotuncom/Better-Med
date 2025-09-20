import type { InstitutionCardProps } from "@/components/ui/Card/InstitutionCard";
import image1 from "../assets/p6-600x480.jpg";
import heart from "../assets/heart.png";
import InstitutionCard from "@/components/ui/Card/InstitutionCard";
import  type { serviceProps } from "./Home";
import icon1 from '../assets/icon-1.png'
import ServiceCard from "@/components/ui/Card/ServiceCard";
const Service = () => {
  const institutionData: InstitutionCardProps[] = [
    { title: "Monthly Test", price: "88", image: image1 },
    { title: "Quarterly Test", price: "98", image: image1 },
    { title: "Yearly Test", price: "208", image: image1 },
  ];
  const services: serviceProps[] = [
  { id: 1, name: "Digestive System", path: icon1 },
  { id: 2, name: "Urologist Clinic", path: icon1},
  { id: 2, name: "Cardiologist Clinic", path: icon1 },
  { id: 2, name: "Endocrinologist Clinic", path: icon1 },
  { id: 2, name: "Dentistry Clinic", path: icon1 },
  { id: 2, name: "Dentistry Clinic", path: icon1},
];
  return (
    <div>
      <section className=" relative w-full  lg:min-h-100 bg-contain bg-no-repeat text-center  py-12  flex  flex-col items-center   bg-center">
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
      <section className="  lg:min-h-screen  flex flex-col items-center bg-primary pb-20 pt-10  text-gray-700">
        <div className="lg:absolute lg:-translate-y-1/2 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
            {institutionData.map((data, idx) => (
              <InstitutionCard
                key={idx}
                image={data.image}
                title={data.title}
                price={data.price}
              />
            ))}
          </div>
        </div>

<div className="lg:absolute  text-center max-w-7xl mx-auto  px-4 mt-50">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-7 place-items-center place-content-stretch py-2 gap-y-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.path}
                title={service.name}
              />
            ))}
          </div>
      </div>
      </section>
      
    </div>
  );
};

export default Service;
