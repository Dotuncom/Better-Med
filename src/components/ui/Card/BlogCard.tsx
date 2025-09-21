import { Link } from "react-router-dom";
import { Button } from "../button";
import { FaLink } from "react-icons/fa";

export type BlogCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
};

const BlogCard = ({ image, title, date, description, link }: BlogCardProps) => {
  return (
    <div className="group transition-all duration-300 ease-in relative w-[330px] h-[540px] p-10 rounded-2xl border-b border-accent/20">
      <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
        <div className=" relative w-[315px] h-[315px] border p-2 border-accent/30 rounded">
          <div className="">
            <img
              src={image}
              className="w-full h-full bg-contain group-hover:scale-105 active:scale"
              alt="blog image"
            />
          </div>
          <div className="absolute inset-0 group-hover:bg-accent/40  text-white text-2xl flex items-center justify-center">
            {" "}
            <FaLink className="hidden group-hover:block" />
          </div>
        </div>
        <div className="flex-grow space-y-4 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[26px] text-center font-Roboto group-hover:text-accent">{title}</h1>
            <button className="min-w-20 h-6 text-[14px]  text-accent bg-gray-300 rounded ">
              {" "}
              {date}
            </button>
          </div>
          <p className="text-center text-gray-700 leading-8 font-Nunito">{description}</p>

          <Button className="text-white absolute ">
            <Link to={link}>view more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
