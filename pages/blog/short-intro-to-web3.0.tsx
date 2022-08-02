import Image from "next/image";
import React from "react";
import { blogImages } from "../../constants";

const Web3Intro = () => {
  return (
    <div className="prose prose-xl prose-h5:font-bold w-[80%] mx-auto">
        <h1 className="text-center">A Short Intro to the most buzzed word Web 3.0</h1>
      <Image src={blogImages.Web3Intro} alt="Intro to Web3.0" />
      <p>
        The tech world is ablaze with thought pieces about the future of tech.
        Particularly the future of the web, which they’ve coined, “Web 3.0.”
      </p>

      <p>
        But what exactly is Web 3.0 and how’s it different from the internet we
        all know and use today?
      </p>

      <p>
        In this article, we’ll talk about the differences between today’s
        internet and tomorrow’s internet as well as the skills developers and
        engineers will need to work in Web 3.0 in the future.
      </p>
      <p>
        <h5>What is Web 3.0?</h5>
        <blockquote>
          Web 3.0 (Web3) is the third generation of the evolution of web
          technologies. The web, also known as the World Wide Web, is the
          foundational layer for how the internet is used, providing website and
          application services.
        </blockquote>

        <p>
          Web 3.0 is still evolving and being defined, and as such, there isn't
          a canonical, universally accepted definition. What is clear, though,
          is that Web 3.0 will have a strong emphasis on decentralized
          applications and make extensive use of blockchain-based technologies.
          Web 3.0 will also make use of machine learning and artificial
          intelligence (AI) to help empower more intelligent and adaptive
          applications.
        </p>

        <p>
          Another aspect that is part of the emerging definition of Web 3.0 is
          the notion of a semantic web. Among those that have advocated for the
          integration of semantic technology into the web is the creator of the
          web, Tim Berners-Lee.
        </p>

        <p>
          It took over 10 years to transition from the original web, Web 1.0, to
          Web 2.0, and it is expected to take just as long, if not longer, to
          fully implement and reshape the web with Web 3.0.
        </p>

        <p>
          If the trend of change is traced from Web 1.0, a static information
          provider where people read websites but rarely interacted with them,
          to Web 2.0, an interactive and social web enabling collaboration
          between users, then it can be assumed that Web 3.0 will change both
          how websites are made and how people interact with them.
        </p>
      </p>
    </div>
  );
};

export default Web3Intro;
