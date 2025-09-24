import { Link } from "react-router-dom";

interface BookcardProps {
  id: string;
  title: string;
  image: string;
  price: string;
}


const BookCard = ({ id, title, image, price }: BookcardProps) => {
   
  return (
    <div className="shadow">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />

        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>


    
    </div>
  );
};

export default BookCard;
