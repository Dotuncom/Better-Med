import { FaClock, FaLink } from "react-icons/fa";
import logo from "../assets/medical-logo-white.png";
import img1 from "../assets/p10-300x300.jpg";
import img2 from "../assets/p6-600x480.jpg";
import img3 from "../assets/experience-doctor.jpg";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { JSX } from "react";

const Footer = () => {
  type newData = {
    image: string;
    title: string;
    month: string;
  };
  const newData: newData[] = [
    {
      image: img1,
      title: "How to be ahead of stock changes",
      month: "1 june 2025",
    },
    {
      image: img2,
      title: "Tip to make your project move forward",
      month: "1 june 2025",
    },
    {
      image: img3,
      title: "How to take care of your heart",
      month: "1 june 2025",
    },
  ];
  type quickLinks = {
    title: string;
    url: string;
  };

  const quickLinks: quickLinks[] = [
    { title: "Support Medical", url: "#" },
    { title: "Arts in Medicine", url: "#" },
    { title: "Modern Facilities", url: "#" },
    { title: "Simulation Center", url: "#" },
    { title: "Like Our Website?", url: "#" },
    { title: "Our Mission & Values", url: "#" },
    { title: "Centers of Excellence", url: "#" },
    { title: "Policies & Procedures", url: "#" },
    { title: "Health Care Professionals", url: "#" },
  ];

  type ContactInfo = {
    icon: JSX.Element;
    label: string;
    value: string;
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+234 813 866 2406",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "support@yoursite.com",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "Dot",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: "...........",
    },
  ];
const currentYear:number = new Date().getFullYear()
  return (
    <div className="min-screen  w-full bg-primary rounded-tl-[100px] py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-8">
        <div className="max-w-[260px] min-h-90 max-h-90  flex flex-col space-y-8 text-gray-300 p-2">
          <div className="w-40 h-12">
            <img src={logo} alt="" />
          </div>
          <div>
            <p>
              {" "}
              Better Med is the best place you will ever want to be treated
            </p>
          </div>
          <div className="space-y-6">
            <h1 className=" ">
              {" "}
              Mon - Fri <span className="font-bold"> 9:00 to 16:30 </span>
            </h1>
            <h1 className=" ">
              {" "}
              Mon - Fri <span className="font-bold"> 9:00 to 16:30 </span>
            </h1>
            <h1 className=" ">
              {" "}
              Mon - Fri <span className="font-bold"> 9:00 to 16:30 </span>
            </h1>
          </div>
        </div>
        <div className="max-w-[260px] max-h-90 flex flex-col space-y-2 text-white  p-2">
          <div className="h-10 text-left">
            <h1 className="text-2xl font-bold"> Latest News</h1>
          </div>

          {newData.map((news, idx) => (
            <div
              key={idx}
              className="group w-60 border-b py-1 border-b-white/40 h-24 flex items-center justify-center  "
            >
              <div className="relative w-30 h-20 rounded overflow-hidden">
                <div className="absolute inset-0 group-hover:bg-accent/40  flex items-center justify-center">
                  {" "}
                  <FaLink />
                </div>
                <img
                  src={news.image}
                  className="w-full h-full"
                  alt="new image"
                />
              </div>
              <div className="h-20 w-full space-y-1 p-1">
                <h4 className="font-semi-bold line-clamp-2">{news.title}</h4>
                <h4 className="flex items-center gap-1">
                  {" "}
                  <span>
                    <FaClock />{" "}
                  </span>{" "}
                  {news.month}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="min-w-[260px] min-h-90 max-h-90 text-white space-y-2  px-4">
          <div className="h-10 text-left">
            <h1 className="text-2xl font-bold "> Useful Links</h1>
          </div>
          <div className="flex flex-col  space-y-2 px-2">
            {quickLinks.map((link) => (
              <h4 className="flex items-center gap-1 hover:translate-x-5 active:translate-x-5 hover:text-accent">
                {" "}
                <span>
                  <FaLink />{" "}
                </span>{" "}
                {link.title}
              </h4>
            ))}
          </div>
        </div>
        <div className="max-w-[260px] min-h-90  max-h-90 space-y-4 text-white ">
          <div className="h-10 text-left">
            <h1 className="text-2xl font-bold"> Latest News</h1>
          </div>
          <ul className="space-y-4 ">
            {contactInfo.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:-translate-y-4"
              >
                <span className=" bg-white text-accent rounded p-2 text-xl">
                  {item.icon}
                </span>
                <span>
                  <strong>{item.label}:</strong> {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
              <p className="text-gray-700 mb-4">copyright@ olamdidotun {currentYear }</p>

      </div>
    </div>
  );
};

export default Footer; 
