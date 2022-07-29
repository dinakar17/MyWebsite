import Image from "next/image";
import { images } from "../../../constants";

const About = () => {
  const abouts = [
    {
      title: "I'm a Machine Learning Engineer",
      description:
        "Honestly, Machine learning is my first love that dragged me into the world of coding in the first place. Funnily enough, I got my inspiration from a KDrama series 'StartUp'. And I'm really looking forward to leverage as many domain specific problems as I can in this field and try to solve them.",
      image: images.MLEngineer,
    },
    {
      title: "I'm a Frontend Developer",
      description:
        "First things first, I still am battling with CSS :). It all begin with the question of 'how do you show content to the people around the world' and eventually found that websites are the best shot to go with. Made a bunch of websites and designs to the best of my ability.",
      image: images.Backend,
    },
    {
      title: "I'm a Backend Developer",
      description:
        "Worked with couple of backend worlds like Flask, ExpressJS. MongoDB, Firebase are my mostly used non-sql databases to work along with my web server. I mostly try use the web server to load machine models and present the predictions on the front end.",
      image: images.FrontendDev,
    },
    {
      title: "I'm a Flutter Developer",
      description:
        "Disclaimer is that I'm not an expert in this app development field . It just occurred to me one day why not get my hands dirty by developing some minimal apps with subtle designs. Developed handful of basic apps with Flutter and will work on it through some projects.",
      image: images.flutterDeveloper,
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden font-default text-center md:text-left"
    >
      <div className="w-[80%] mx-auto ">
        {/* https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element */}
        {/* my-[10%] is getting applied to "section" element by 10% instead of div it is applied to */}
        {/* Test the above argument by giving section and div inside it with different background colors */}
        <div className="text-4xl md:text-5xl text-center font-bold capitalize mt-[10%] mb-[5%]">
          <h2>
            I know <span className="text-primary">good design</span>
          </h2>
          <h2>
            means <span className="text-primary">good business</span>
          </h2>
        </div>
        {/* No need to set any width to the cards since we've used grid as an alternative to flex */}
        <div className="grid gap-10 md:grid-flow-col md:auto-cols-[1fr] justify-center">
          {abouts.map((about, index) => (
            // Note: Assign width specifically to cards for responsiveness (prefer 'max-width' for blogging website)
            <div key={index} className="rounded-lg w-60 transition-all">
              {/* Add height to any image inside the card  */}
              <div className="h-36">
                <Image
                  src={about.image}
                  alt="Flutter"
                  className="object-cover w-full h-full rounded-lg"
                />{" "}
              </div>
              <div className="relative p-2 flex flex-col gap-1">
                {/* <div className="absolute custom-clip-path w-full h-full hover:bg-primary top-0">Hello Welcome</div> */}
                <h4 className="font-bold">{about.title}</h4>
                <p className="text-sm">{about.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
