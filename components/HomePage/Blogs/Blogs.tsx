import Image from "next/image";
import { useRouter } from "next/router";
import { blogImages, images } from "../../../constants";

const content = [
  {
    image: blogImages.api,
    tag: "Web Developement",
    link: "/blog/what-the-heck-is-an-api",
    description: "What the Heck is an API?",
  },
  {
    image: blogImages.tailwind,
    tag: "Web Developement",
    description: "Why Tailwind is the King among CSS Frameworks?",
    link: "/blog/why-tailwindcss",
  },
  {
    image: blogImages.deepLearningApplications,
    tag: "ML/AI",
    link: "/blog/deep-learning-and-its-applications",
    description: "Deep Learning and Its applications",
  },
];

const Blogs = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen font-default overflow-hidden">
      {/* Alternative to my-[5%]? */}
      <div className="w-[80%] mx-auto my-[5%]">
        <div className="text-center">
          <p className="font-bold text-primary text-lg">Latest News</p>
          <h4 className="text-3xl font-bold">Check Out my Recent Blogs</h4>
          <p className="text-lg">
           Here are some of my recently written blogs
          </p>
        </div>
        <div className="grid gap-10 md:grid-flow-col md:auto-cols-[1fr] my-[2%]">
          {content.map((item, index) => (
            <div key={index}>
              {/* overflow-hidden property is important here */}
              <div className="w-full overflow-hidden cursor-pointer rounded-lg cursor-pointer" onClick={() => router.push(`${item.link}`)}>
                {/* play with transition */}
                <Image
                  src={item.image}
                  alt="blog"
                  className="hover:scale-110 w-full h-full object-cover transition-all"
                />
              </div>
              {/* Alternative to my-5? */}
              <div className="flex flex-col gap-2 my-5 ">
                <p className="font-bold text-primary">{item.tag}</p>
                <p className="font-bold text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
