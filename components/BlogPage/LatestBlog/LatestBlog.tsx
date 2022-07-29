import Image from "next/image";
import React from "react";
import { images } from "../../../constants";

const LatestBlog = () => {
  return (
    <>
      <h2 className="text-center text-4xl lg:text-5xl font-bold">
        Latest <span className="text-primary">Blog For you</span>
      </h2>
      <div className="w-[80%] mx-auto grid md:grid-flow-col md:auto-cols-[1fr] my-[3%]">
        <div className="w-full h-full p-5">
          <Image src={images.nature} alt="nature" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-4 p-5">
          <h4 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h4>
          <div className="flex justify-between font-bold text-gray-500">
            <p>July 27th, 2022</p>
            <p>4 min Read</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            felis id nunc eleifend, vitae suscipit diam dapibus. Quisque eu
            mauris rutrum, scelerisque libero eu, lacinia libero.Cras ac dui
            libero. Nulla pharetra sit amet risus nec vehicula. Donec commodo
            elit in. Aenean sodales, felis ac mollis ullamcorper, ipsum nisi
            viverra tellus, vel tristique eros urna sit amet magna. Suspendisse
            tristique posuere fermentum. Nulla rhoncus pellentesque sem, pretium
            semper felis cursus vitae. Etiam pharetra ullamcorper massa, vitae
            vulputate augue imperdiet vel.
          </p>
          <p className="text-right text-xl font-bold text-primary">Read Full Article</p>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
