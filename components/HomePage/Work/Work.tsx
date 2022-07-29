import { useState } from "react";
import { images } from "../../../constants";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";

const ListOfWorks = [
  {
    name: "Add Your Ideas",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Just a basic todo app that offers an interface to store and share your ideas",
    tags: ["Web App"], // if this array is empty typescript throws an error
    image: images.ideas,
  },
  {
    name: "Know your Weather",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Type in your location name and boom, it shows the current weather of your city. Uses OpenWeatherApi to fetch results for the search.",
    tags: ["Web App"], // if this array is empty typescript throws an error
    image: images.weather,
  },
  {
    name: "SignUp NewsLetter",
    imageUrl: images.projects,
    projectLink: "...",
    title: "Share Projects",
    description:
      "Simple Demo to show how to build a sign up newsletter using MailChimpAPI and also how to push signed up newsletters to the mail chimp server",
    tags: ["Web App"], // if this array is empty typescript throws an error
    image: images.signUpNewsLetter,
  },
  {
    name: "Share Projects",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "A high level end MERN Stack project that allows a person to share and showcase his/her projects",
    tags: ["UI/UX", "Web App"],
    image: images.shareProjects,
  },
  {
    name: "Personal Blogging site",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description: "A website that consists of all the blogs I personally wrote.",
    tags: ["UI/UX", "Web App"],
    image: images.blogSite,
  },
  {
    name: "Portfolio",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description: "Designed using Figma. Just a personal portfolio of mine.",
    tags: ["UI/UX"],
    image: images.portfolio,
  },
  {
    name: "Flutter Weather App",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Built using OpenWeatherMap API. It's just a follow up project I have done during my Flutter development course",
    tags: ["Mobile App"],
    image: images.weatherApp,
  },
  {
    name: "Todo App",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "This is Flutter basic CRUD application. I've utilized 'Provider' package for the state management for this simple todo app.",
    tags: ["Mobile App"],
    image: images.todoApp,
  },
  {
    name: "Flash Chat",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Yet another flutter application whose backend is managed by this serverless web server Firebase.",
    tags: ["Mobile App"],
    image: images.flashChat,
  },
  {
    name: "Food Classification App",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Built using Flutter package and managed the ML model using Flask backend.",
    tags: ["Mobile App"],
    image: images.flashChat,
  },
  {
    name: "Image Caption Generator",
    imageUrl: images.projects,
    projectLink: "...",
    title: "...",
    description:
      "Explored this domain using pre-trained VGG16, InceptionV3 and Word2Vec models and had fun and frustration through out.",
    tags: ["ML/AI"],
    image: images.flashChat,
  },
];

const Work = () => {
  const [works, setWorks] = useState(ListOfWorks);
  // Note: Here we're using just one state to handle a bunch of buttons
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    // Just two lines for filtering function in React
    if (item === "All") setWorks(ListOfWorks);
    else setWorks(ListOfWorks.filter((work) => work.tags.includes(item)));
  };
  return (
    <section className="min-h-screen">
      <div className="w-[80%] mx-auto">
        {/* Alternative to mt-[10%] mb-[2%]? (flex)*/}
        <h4 className="text-center text-5xl mt-[10%] mb-[2%]">
          My Creative Portfolio Section
        </h4>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {["UI/UX", "Web App", "Mobile App", "ML/AI", "All"].map(
            // Note: use () after => not {}
            (item, index) => (
              // If you want to pass a parameter to event handler (handleWorkFilter) then use an arrow function
              <button
                key={index}
                className={`py-1 px-2 rounded-full ${
                  activeFilter === item ? "bg-primary" : "bg-gray-400"
                }`}
                onClick={() => handleWorkFilter(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
        {/* Todo: Change the entire cards styling to grid instead of flex */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 justify-center my-[2%]">
          {works.map((work, index) => (
            // applying transition to the below div element doesn't apply to its children
            <div
              key={index}
              // style={{ backgroundImage: `url('${images.firebase}')` }} Not working
              // make sure you put content-[''] to see the changes happen for "before:" pseudo state
              // understand how max-width works in this scenario and learn more about grid
              // className={`group p-2 relative rounded-lg max-w-5xl h-72  flex items-center justify-center overflow-hidden`} not working
              className="group relative w-full h-72 overflow-hidden shadow-lg rounded-lg"
            >
              {/* Apply z-index to the block which you want to get on top */}
              <Image
                src={work.image}
                alt={work.name}
                // height={3000}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-50 w-full h-full rounded-xl"
              />
              <div className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 group-hover:-translate-y-1/2 text-white transition-all flex flex-col gap-2">
                <h4 className="font-extrabold text-2xl text-center text-primary">{work.name}</h4>
                <p className="italic text-lg">{work.description}</p>
                <div className="flex justify-evenly">
                  <button className="bg-primary p-2 custom-shadow rounded-full">Github</button>
                  <button className="flex items-center gap-1"><AiFillEye className="scale-110"/> View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
