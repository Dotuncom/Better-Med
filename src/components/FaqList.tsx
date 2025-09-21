import { useState } from "react";
import FaqWrapper from "./FaqWrapper";

const faqData = [
  {
    id: 1,
    question: "What services does Better Med Clinic provide?",
    answer:
      "Better Med Clinic offers comprehensive medical services including general checkups, diagnostics, specialized care, and emergency services.",
  },
  {
    id: 2,
    question: "Do I need an appointment to visit Better Med Clinic?",
    answer:
      "Walk-ins are welcome, but we recommend booking an appointment to reduce waiting times and ensure you are attended to promptly.",
  },
  {
    id: 3,
    question: "Does Better Med Clinic accept health insurance?",
    answer:
      "Yes, we accept most major health insurance providers. Please contact our reception for specific details about your coverage.",
  },
  {
    id: 4,
    question: "What are the clinic’s opening hours?",
    answer:
      "We are open Monday to Saturday from 8:00 AM to 8:00 PM. On Sundays, we operate from 10:00 AM to 4:00 PM.",
  },
  {
    id: 5,
    question: "Where is Better Med Clinic located?",
    answer:
      "Better Med Clinic is located at 123 Health Avenue, in the heart of the city’s medical district.",
  },
];

const FaqList = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id); 
  };

  return (
    <div className="">
      {faqData.map((faq) => (
        <FaqWrapper
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openId === faq.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default FaqList;
