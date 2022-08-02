import Image from "next/image";
import React from "react";
import { blogImages } from "../../constants";
const webTechnologiesToLearn = () => {
  return (
    <div className="prose prose-xl prose-h5:font-bold w-[80%] mx-auto">
        <h1 className="text-center">Web Technologies to Look after in 2022</h1>
        <Image src={blogImages.WebTechnologies} alt="web technologies"/>
      <p>
        The world of website development brings changes every single year and
        makes it challenging for some businesses to survive in this digital era.
        Thereby, businesses need to keep pace with the web development trends to
        stay competitive. And to make your position more potent in this
        competitive digital market, you require a robust web product.
      </p>

      <p>
        However, it may be critical to identify the most effective web
        development trends that can work for your organization. Hence, to save
        your time and effort, we have accumulated a list of web development
        trends by assessing market requirements in various IT fields.
      </p>
      <h5>Here's the list of web technologies to learn in 2022</h5>
      <ul>
        <li>Progressive Web Apps (PWAs)</li>
        <li>Single Page Application (SPA)</li>
        <li>Dart Mode UI</li>
        <li>Voice Search</li>
        <li>Accelerated Mobile Pages (AMP)</li>
        <li>Serverless Architecture</li>
        <li>Motion UI</li>
        <li>Internet of Things (IoT)</li>
        <li>Blockchain Technology</li>
      </ul>
    </div>
  );
};

export default webTechnologiesToLearn;
