import BlogList from "@/components/BlogList"
import Widget from "@/components/ui/Widget"
import img1 from "../assets/p10-300x300.jpg";
import img2 from "../assets/p6-600x480.jpg";
import img3 from "../assets/experience-doctor.jpg";
import NewsCard from "@/components/ui/Card/NewsCard";

const Blog = () => {
  type Categories ={
    id:number,
    name:string,
  }
  const catgories:Categories[] =[
    {id:1, name:'interview'},
    {id:2, name:'News'},
    {id:3, name:'Tutorials'},
    {id:4, name:'uncategorised'},
    {id:5, name:'interview'},

    
  ]

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
  return (
    <div className="container mx-auto py-8  px-4">
        <div className="flex lg:flex-row flex-col justify-between items- center gap-20">
<div>
             <BlogList/>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-4 space-y-10">
            <Widget title="Categories"> 
                <div className="flex flex-col justify-center items-center ">
                  {catgories.map((category)=>(
                    <h4 className="text-gray-400 hover:border-b border-gray-400"> {category.name}</h4>
                  ))}
                </div>
    
            </Widget>

            <Widget title="Latest Post">
                 <div className="flex flex-col items-center justify-center">
                        {newData.map((news, idx) => (
                                  <NewsCard key={idx}
                                   image={news.image}
                                   title={news.title}
                                   month={news.month}/>
                                 ))}
                 </div>
            </Widget>
        </div>
        </div>
        
        
        
    </div>
  )
}

export default Blog