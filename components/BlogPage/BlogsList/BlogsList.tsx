import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { blogImages, images } from "../../../constants";


const BlogsList = () => {
  const router = useRouter();
  const blogPosts = [
    {
      date: "21th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web", "api"],
      title: "What the Heck is an API?",
      link: "/blog/what-the-heck-is-an-api",
      image: blogImages.api
    },
    {
      date: "19th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web Development", "Lorem", "Lorem"],
      title: "Why is Tailwind CSS the King among CSS frameworks",
      link: "/blog/why-tailwindcss",
      image: blogImages.tailwind,
    },
    {
      date: "20th July, 2022",
      topic: "Deep Learning",
      tags: ["ML/AI", "Lorem", "Lorem"],
      title: "Deep Learning & Its applications",
      link: "/blog/deep-learning-and-its-applications",
      image: blogImages.deepLearningApplications,
    },
    {
      date: "22nd July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web", "Web 3.0"],
      title: "A Short Intro to the most buzzed Web 3.0",
      link: "/blog/short-intro-to-web3.0",
      image: blogImages.Web3Intro,
    },
    {
      date: "12th July, 2022",
      topic: "Lorem ipsum dolor",
      tags: ["Web", "Lorem", "Lorem"],
      title: "Web Technologies to look after in 2022",
      link: "/blog/web-technologies-to-learn-in-2022",
      image: blogImages.WebTechnologies,
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
                <p>{blog.date}</p>
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
