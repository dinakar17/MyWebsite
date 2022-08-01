import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { blogImages, images } from "../../../constants";


const BlogsList = () => {
  const router = useRouter();
  const blogPosts = [
    {
      date: "27th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web", "api"],
      title: "What the Heck is an API?",
      link: "/blog/what-the-heck-is-an-api",
      image: blogImages.api
    },
    {
      date: "27th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Lorem", "Lorem", "Lorem"],
      title: "Why is Tailwind CSS the King among CSS frameworks",
      link: "/blog/why-tailwindcss",
      image: blogImages.tailwind,
    },
    {
      date: "27th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Lorem", "Lorem", "Lorem"],
      title: "Lorem ipsum dolor sit amet, consectetur",
      link: "/blog/why-tailwindcss",
      image: images.nature,
    },
    {
      date: "27th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web Development", "CSS"],
      title: "Lorem ipsum dolor sit amet, consectetur",
      link: "/blog/why-tailwindcss",
      image: images.nature,
    },
    {
      date: "27th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Lorem", "Lorem", "Lorem"],
      title: "Lorem ipsum dolor sit amet, consectetur",
      link: "/blog/why-tailwindcss",
      image: images.nature,
    },
  ];

  return (
    <>
      <h4 className="text-3xl text-center font-bold">
        Take a Tour of Some of <span className="text-primary">my articles</span>
      </h4>
      {/* <div className="flex justify-center items-center flex-wrap gap-5 my-[2%]">
        {[
          "UI/UX",
          "Web Development",
          "Machine Learning",
          "ReactJS",
          "Typescript",
        ].map((category, index) => (
          <button className="p-2 rounded-full bg-primary" key={index}>
            {category}
          </button>
        ))}
      </div> */} 
      <div className="grid gap-10 md:grid-cols-3 my-[2%] w-[80%] mx-auto">
        {blogPosts.map((blog, index) => (
          <div key={index}>
              <div className="overflow-hidden" onClick={() => router.push(blog.link)}>
                <Image src={blog.image} alt={blog.title} className="rounded-xl hover:scale-125 transition-all"/>
              </div>
              <div>
                <div className="flex justify-between font-bold text-gray-500">
                <p>{blog.tags[0]}</p>
                <p>{blog.date} || {blog.tags[0]}</p>
                </div>
                <h4 className="text-xl font-bold text-center">{blog.title}</h4>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsList;
