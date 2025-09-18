import { Progress } from "@/components/ui/progress";
import background from "../../../assets/background.jpg";
import video from "../../../assets/p6-600x480.jpg";
import { GoVideo } from 'react-icons/go'
type MedicalRatingProps = {
  id: number;
  name: string;
  value:number
};
const Technology = () => {
  const medicalRating: MedicalRatingProps[] = [
    { id: 1, name: "Good communication", value:90 },
    { id: 2, name: "Organisation and Clerical" ,value:90},
    { id: 3, name: "Medical Knowledge",value:98 },
    { id: 4, name: "Customer service",value:95 },
  ];
  
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative min-w-1/2 hover:scale-105">
            <img src={video} alt="" />
            <div className="absolute flex items-center justify-center inset-0">
              
              < GoVideo className="bg-primary text-white p-4 rounded"  size={80}/>
            </div>
          </div>
          <div className="w-full  py-10 space-y-16">
            {medicalRating.map((rating) => (
              <div className="flex flex-col gap-1">
                <div key={rating.id} className="flex justify-between">
                  <h4>{rating.name}</h4>
                  <h3 className="text-primary">{rating.value}%</h3>
                </div>

                <Progress value={rating.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
