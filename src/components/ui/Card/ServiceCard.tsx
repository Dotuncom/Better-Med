
type serviceCardProps = {
  image: string;
  title: string;
};
const ServiceCard = ({ image, title }: serviceCardProps) => {
  return (
    <div className="relative group rounded-[8px] bg-white hover:bg-accent hover:translate-y-5 transition-all duration-100 ease-in-out text-center w-80 h-45 md:w-80 lg:w-50 md:h-65 shadow-2xl py-4 px-2 md:px-6 md:py-10 flex flex-col gap-4 lg:gap-8 items-center">
      <img src={image} alt="service image" className=" w-15 h-15 md:w-20 md:h-20 transition-transform duration-800 ease-in-out group-hover:invert group-hover:brightness-20  group-hover:rotate-y-360" />
     
      <h3 className="text-gray-700 text-base font-bold">{title}</h3>
      <div className="absolute   left-1/2    top-full transform -translate-x-1/2 -translate-y-1/2">
        <button className="bg-accent  py-2 w-40  group-hover:bg-white group-hover:text-accent rounded text-white font-bold">
          More details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
