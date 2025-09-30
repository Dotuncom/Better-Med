import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export const Card = () => {
  return <div className="min-h-50 max-w-50 w-50 bg-red-500 "></div>;
};

const Checkout = () => {
  const [isVisible, setIsVisible] = useState(true);
  const variant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const variant2 = {
    initial: { opacity: 1, scale: 1, rotate: 0, skew: 0 },
    hover: { skew: "10deg" },
    click: { scale: 2 },
    rotate: { rotate: 20 },
    transition: { duration: 5 },
  };

  // stagger
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8, delayChildren: 0.3, duration: 4 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagPVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.8, staggerDirection: -1, duration: 1 },
    },
  };
  const stagCVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
  ];


  const parentImageVariant = {
  hidden:{opacity:0},
  visible:{
  opacity:1,
  transition:{
   staggerChildren:0.8,
   delayChildren:0.1

  }
  }

  }



  const childImageVariants ={
  hidden:{opacity:0, y:20},
    visible:{opacity:1, y:0},
  
  }
  const [showImages, setShowImages] = useState(false);

  const handleImageClick =()=>{
  setShowImages((prev)=>!prev)
  }
  return (
    <div className="mx-auto container px-4 py-10 space-y-10 ">
      <div className="flex  space-x-10">
        <motion.div
          variants={variant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit={"exit"}
          transition={{ ease: "easeInOut", duration: 4 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          <Card />
        </motion.div>
        .
        <motion.div
          variants={variant2}
          initial="initial"
          whileHover={"hover"}
          whileTap={"rotate"}
        >
          <Card />
        </motion.div>
      </div>

      <motion.div
        //  whileHover={{rotate:'360deg'}}
        whileTap={{ skewY: 20 }}
        transition={{ type: "spring", stiffness: 300 }}
        dragConstraints={{ top: 20, right: -10, bottom: -20, left: -10 }}
        drag
        className="h-20 w-20 bg-yellow-500"
      ></motion.div>

      {/* Stagger animation */}
      <motion.div
        className="flex gap-4"
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_, idx) => (
          <motion.div
            key={idx}
            variants={childVariants}
            className="bg-green-600 h-10 w-10"
          ></motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagPVariants}
        className="flex gap-2"
      >
        {[...Array(5)].map((_, idx) => (
          <motion.div
            variants={stagCVariants}
            key={idx}
            className="h-10 w-10 bg-pink-600 rounded-full"
          ></motion.div>
        ))}
      </motion.div>
      <div className="space-y-4">

        <Button onClick={handleImageClick}>
         {showImages ? 'hidden Image':'show Image'}
        </Button>

        <motion.div
         variants={parentImageVariant}
         animate={showImages? 'visible':'hidden'}
         initial='hidden'
          className=" flex gap-2">
          {images.map((image, index) => (
            <motion.img variants={childImageVariants} className="h-50 w-50" key={index} src={image.url} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
