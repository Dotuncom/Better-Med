import { FaClock, FaLink } from "react-icons/fa"

type NewCardProps = {
    image:string,
    title:string,
    month:string,

}
const NewsCard = ({image,title,month}:NewCardProps) => {
  return (
    <div>
         <div
                      className="group curso w-60 border-b py-1 border-b-white/40 h-24 flex items-center justify-center text-gray-600  "
                    >
                      <div className="relative w-30 h-20 rounded overflow-hidden">
                        <div className="absolute inset-0 group-hover:bg-accent/40  text-white flex items-center justify-center">
                          
                          <FaLink/>
                        </div>
                        <img
                          src={image}
                          className="w-full h-full"
                          alt="new image"
                        />
                      </div>
                      <div className="h-20 w-full space-y-1 p-1">
                        <h4 className="font-semi-bold line-clamp-2">{title}</h4>
                        <h4 className="flex items-center gap-1">
                          
                          <span>
                            <FaClock/>
                          </span>
                          {month}
                        </h4>
                      </div>
                    </div>
    </div>
  )
}

export default NewsCard