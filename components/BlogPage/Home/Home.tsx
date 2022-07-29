import Image from "next/image";
import React from "react";
import blogPic from "../../../public/static/BlogPageAssets/blog.png";

const Home = () => {
  return (
    <section className="min-h-screen">
      <div className="w-[80%] mx-auto grid  md:grid-flow-col md:auto-cols-[1fr] text-center md:text-left">
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2 className="font-bold text-5xl lg:text-7xl">Welcome to my</h2>
            <h2 className="font-bold text-5xl lg:text-7xl">
              {" "}
              <span className="text-primary font-extrabold">Blogging</span>{" "}
              World
            </h2>
          </div>
          <p className="text-2xl lg:text-3xl">
            A place where knowledge meets transparency
          </p>
          <button className="p-3 rounded-full bg-primary lg:mr-auto text-white text-xl custom-shadow">
            Let's go
          </button>
        </div>
        <div>
          <Image src={blogPic} alt="BlogImage" />
        </div>
      </div>
    </section>
  );
};

export default Home;
