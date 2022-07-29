import Image from "next/image";
import { useState } from "react";
import { images } from "../../../constants";

const skills = [
    { name: "Flutter", bgColor: "...", icon: images.flutter },
    { name: "Python", bgColor: "...", icon: images.python },
    { name: "HTML5", bgColor: "...", icon: images.html },
    { name: "Flask", bgColor: "...", icon: images.flask },
    { name: "NodeJS", bgColor: "...", icon: images.node },
    { name: "React", bgColor: "...", icon: images.react },
    { name: "Redux", bgColor: "...", icon: images.redux },
    { name: "TypeScript", bgColor: "...", icon: images.typescript },
    { name: "MongoDB", bgColor: "...", icon: images.mongodb },
    { name: "CSS3", bgColor: "...", icon: images.css },
    { name: "Keras", bgColor: "...", icon: images.css },
    { name: "Tensorflow", bgColor: "...", icon: images.tensorflow },
    { name: "JavaScript", bgColor: "...", icon: images.javascript },
    { name: "Firebase", bgColor: "...", icon: images.firebase }, 
  ];
const tools = [
  {
    icon: images.firebase,
    name: "Firebase",
    bgColor: '...'
  },
  {
    icon: images.flask,
    name: "Flask",
    bgColor: '...'
  },
  {
    icon: images.css,
    name: "CSS3",
    bgColor: '...'
  },
];
const Skills = () => {
  const [items, setItems] = useState(skills);

  return (
    <section className="min-h-screen font-default overflow-auto">
      {/* Question: Why 'my-auto isn't working? */}
      {/* Tip: Take advantage for gap-x gap-y in grid arrangement */}
      <div className="w-[80%] mx-auto grid md:grid-flow-col md:auto-cols-[1fr] text-center md:text-left my-[10%] gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="text-3xl font-bold">
            What Programming skills do I have?
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tristique velit eget tortor lobortis dictum. Nam vel interdum quam,
            at dapibus neque. Praesent tempus eros ac molestie suscipit.
          </p>
          <div className="flex justify-center md:justify-start gap-5">
            <button
              className={`text-lg font-bold p-2 rounded-full transition-all ${
                items === skills ? "bg-primary" : "bg-gray-500"
              }`}
              onClick={() => setItems(skills)}
            >
              Skills
            </button>
            <button
              className={`text-lg font-bold p-2 rounded-full transition-all ${
                items === tools ? "bg-primary" : "bg-gray-500"
              }`}
              onClick={() => setItems(tools)}
            >
              Tools
            </button>
          </div>
        </div>
        <div>
          {/* List of skills */}
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {items.map((item, index) => (
              <div key={index} className="w-16 h-16 text-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full bg-gray-200"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
