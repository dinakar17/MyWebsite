import Image from "next/image";
import { images } from "../../../constants";

const content = [
  {
    image: images.blog1,
    tag: "Web Developement",
    description: "Jim Morisson Says when the musics over turn off the light",
  },
  {
    image: images.blog2,
    tag: "Web Developement",
    description: "Jim Morisson Says when the musics over turn off the light",
  },
  {
    image: images.blog3,
    tag: "Web Developement",
    description: "Jim Morisson Says when the musics over turn off the light",
  },
];

const Blogs = () => {
  return (
    <section className="min-h-screen font-default overflow-hidden">
      {/* Alternative to my-[5%]? */}
      <div className="w-[80%] mx-auto my-[5%]">
        <div className="text-center">
          <p className="font-bold text-primary text-lg">Latest News</p>
          <h4 className="text-3xl font-bold">Check Out my Recent Blogs</h4>
          <p className="text-lg">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        <div className="grid gap-10 md:grid-flow-col md:auto-cols-[1fr] my-[2%]">
          {content.map((item, index) => (
            <div key={index}>
              {/* overflow-hidden property is important here */}
              <div className="w-full overflow-hidden cursor-pointer rounded-lg">
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
