import { FaChevronDown } from "react-icons/fa";

type FaqWrapperProps ={
 id:number,
 answer:string,
 question:string,
 isOpen:boolean,
 onToggle:(id:number)=>void
}
const FaqWrapper = ({ id, question, answer, isOpen, onToggle }: FaqWrapperProps) => {



  return (
    <div className="max-w-md  my-4 rounded-lg border border-gray-300 shadow-md overflow-hidden">
      {/* Question */}
      <button
        onClick={()=>onToggle(id)}
        className={`px-4 py-3 flex justify-between items-center w-full text-left font-semibold text-base transition duration-300
          ${isOpen ? "bg-primary text-white" : "bg-white text-gray-800 hover:bg-gray-100"}
        `}
      >
        <h3>{question}</h3>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`px-4 overflow-hidden transition-all duration-300 ${
    isOpen ? "max-h-40 py-3 text-gray-100 bg-primary" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FaqWrapper;
