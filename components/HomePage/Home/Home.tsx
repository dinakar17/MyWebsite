import Image from "next/image";
import { useRouter } from "next/router";
import { images } from "../../../constants";

const Home = () => {
  const router = useRouter();
  return (
    <section id="home" className="min-h-screen font-default">
      {/* grid md:grid-flow-col ... is the best way for having columns of equal width  and also responsive minmax() function*/}
      <div className="w-[80%] mx-auto grid md:grid-flow-col md:auto-cols-[1fr] text-center md:text-left">
        <div className="flex flex-col justify-center gap-10 my-[20%]">
          {/* Note: Know more about responsive text size */}
          <div className="text-7xl lg:text-8xl">
            <h1 className="font-bold">Hi, I'm</h1>
            <h1 className="font-extrabold text-primary">Dinakar</h1>
          </div>
          <p className="text-xl lg:text-2xl font-semibold">
            I am passionate about any domain that machine learning offers its solution in.
          </p>
          {/* when button is a flex item mr-auto is required (Why?)*/}
          {/* Alternative to md:mr-auto? */}
          <button onClick={() => router.push('/blog')}className="bg-purple-600 p-4 rounded-full text-xl lg:text-2xl text-white custom-shadow md:mr-auto">
            Read my blogs
          </button>
        </div>
        <div className="relative">
          {/* Question: How to fit an image inside a div responsively? (see Blogs folder)*/}
          <div className="max-h-screen mx-auto overflow-hidden flex items-center justify-center">
            <Image
              src={images.profile}
              alt="profile"
              // Problem here in Nextjs
              // mx-auto centers the image inside the div
              // className="object-cover w-full h-full"
              width={310}
              height={700}
            />
          </div>
          {/* Question: How to center a absolute div inside a relative div */}
          <div className="absolute top-40 left-16 right-0 bottom-0 m-auto z-[-2] scale-[80%]">
            <Image src={images.blob} alt="profile" />
          </div>
          {/* absolute has got no effect inside Image component so enclose it inside a div and apply styles
          Ref: https://stackoverflow.com/questions/66643887/how-put-a-image-component-from-next-image-in-position-absolue
          https://stackoverflow.com/questions/64846858/how-to-use-tailwind-css-with-next-js-image
           */}
          <div className="absolute -left-10 right-0 top-36 bottom-0 my-auto z-[-1]">
            <Image src={images.rocket} alt="rocket" />
          </div>
          <div className="absolute right-10 bottom-0 mx-auto scale-75 z-[-1]">
            <Image src={images.analytics} alt="rocket" />
          </div>
          <div className="absolute right-0 top-10 z-[-1]">
            <Image src={images.badge} alt="badge" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
