import type { BlogCardProps } from "./ui/Card/BlogCard";
import BlogCard from "./ui/Card/BlogCard";
import image1 from '../assets/about-3.jpg'
import image2 from '../assets/p10-600x480.jpg'
import image3 from '../assets/p9-300x300.jpg'
import image4 from '../assets/p8-300x300.jpg'

const blogData: BlogCardProps[] = [
  {
    id: 1,
    image: image1,
    title: "How to Be Ahead of Stock Changes",
    date: "1 June 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie blandit lobortis.",
    link: "#",
  },
  {
    id: 2,
    image: image2,
    title: "Top 5 Health Tips for Busy People",
    date: "10 July 2024",
    description:
      "Curabitur vel libero at mauris pretium lacinia. Suspendisse potenti. Etiam nec luctus justo.",
    link: "#",
  },
  {
    id: 3,
    image: image3,
    title: "Better Med Clinic Expands Services",
    date: "20 August 2024",
    description:
      "Proin vel nisi a nisl fermentum dapibus. Integer feugiat, ligula in cursus commodo.",
    link: "#",
  },
  {
    id: 4,
    image: image4,
    title: "Understanding Your Medical Insurance",
    date: "5 September 2024",
    description:
      "Vestibulum consequat, magna at bibendum tincidunt, felis dui scelerisque turpis.",
    link: "#",
  },
];


const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-20">
      {blogData.map((blog) => (
        <BlogCard
        id={blog.id}
          key={blog.id}
          image={blog.image}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          link={blog.link}
        />
      ))}
    </div>
  );
};

export default BlogList