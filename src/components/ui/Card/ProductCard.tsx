import { FaHeart, FaSearch, FaShare } from "react-icons/fa";
import productImage from "../../../assets/p6-600x480.jpg";
import { Button } from "../button";
import type { IconType } from "react-icons";
import { Tooltip, TooltipTrigger } from "../tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";



type ActionButtons = {
  icon: IconType;
  name: string;
};

const ActionButtons: ActionButtons[] = [
  { name: "Add to Wishlist", icon: FaHeart },
  { name: "Add to Compare", icon: FaSearch },
  { name: "Quick view", icon: FaShare },
];
const ProductCard = () => {
  return (
    <div
      className="group relative max-w-[350px] min-h-[350px] border border-accent/50 rounded shadow-2xl bg-cover bg-no-repeat flex items-center justify-center "
      style={{ backgroundImage: `url(${productImage})`, position: "relative" }}
    >
      <Button className="text-white font-bold text-2xl absolute invisible group-hover:visible ">
        Add to Cart
      </Button>
      <div className=" absolute top-0 right-0 h-20 w-20 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-accent">$21</h1>
      </div>

      <div className="absolute left-full invisible lg:group-hover:visible -translate-x-1/2 min-w-14 min-h-40 bg-primary rounded-[20px] py-2 flex items-center  ">
        <div className=" h-full w-full flex flex-col text-white text-[18px] items-center justify-evenly gap-4">
          {ActionButtons.map((icon) => {
            const IconComponent = icon.icon;
            return (
              <Tooltip>
                <TooltipTrigger >
                    <span className="h-10 w-10 flex items-center justify-center hover:bg-accent/60">
                <IconComponent />
              </span>
                </TooltipTrigger>
                <TooltipContent className="bg-accent min-w-40  font-medium px-2 rounded-2xl py-1 mx-auto text-center absolute transition duration-300 ease-in-out right-8">{icon.name}</TooltipContent>
              </Tooltip>
              
            );
          })}
        </div>
      </div>
      
      <div className="w-full absolute  bottom-0 translate-y-1/2 z-20 text-white rounded-[30px]  text-4xl font-bold  px-10">
        <div className="w-full h-20 bg-accent/90 rounded-2xl  text-2xl font-bold  flex items-center justify-center">
          syringe
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
