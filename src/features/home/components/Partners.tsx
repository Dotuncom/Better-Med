import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import logo1 from "../../../assets/logo-1.jpg";
import logo2 from "../../../assets/logo-2.jpg";
import logo3 from "../../../assets/logo-3.jpg";
import logo4 from "../../../assets/logo-4.jpg";
import logo5 from "../../../assets/logo-5.jpg";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface Partner {
  id: number;
  name: string;
  image: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Heart Care Center",
    image: logo1,
  },
  {
    id: 2,
    name: "Technocare",
    image: logo2,
  },
  {
    id: 3,
    name: "Medical Lab",
    image: logo3,
  },
  {
    id: 4,
    name: "Medical Lab 2",
    image: logo4,
  },
  {
    id: 5,
    name: "Healthy Life",
    image: logo5,
  },
];

const Partners = () => {
  return (
    <div className="w-full py-4 ">
      <div className="container mx-auto px-4 flex items-center  flex-wrap justify-center gap-2">
        {partners.map((partner) => (
          <Tooltip key={partner.id} >
            <TooltipTrigger >
              <div className="min-h-20">
               <img src={partner.image} className="h-full w-full shadow-2xl" alt="partners logo" />

              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-accent p-2 rounded text-white">{partner.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Partners;
