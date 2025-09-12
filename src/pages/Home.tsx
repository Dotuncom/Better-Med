import ServiceCard from "../components/ui/Card/ServiceCard";
import Herosection from "../features/home/components/Herosection";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";

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
    <div>
      <Herosection />
      <section className="relative min-h-screen bg-primary">
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
      </section>
      <section className='absolute bg-gray-700 top-2 min-h-screen'>
d
      </section>
    </div>
  );
};

export default Home;
