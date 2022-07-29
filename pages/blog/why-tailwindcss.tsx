import Image from "next/image";
import Script from "next/script";
import React from "react";
// import { CopyBlock, dracula } from "react-code-blocks";

const TailwindCSS = () => {
  return (
    <section className="w-[90%] lg:w-[50%] mx-auto">
      <h1 className="text-3xl font-bold pb-8 ">
        Why is Tailwind CSS the King among CSS frameworks?
      </h1>
      <div className="text-lg font-open_sans font-medium text-gray-600">
        <p className="pb-4">
          By the end of this post, you shall have the answers in your pocket to
          the following questions...
        </p>
        <ul className="flex flex-col gap-4 pl-6 list-disc">
          <li>Why should I use Tailwind CSS?</li>
          <li>
            Why Tailwind CSS if we’ve Bootstrap, Material UI (React) prevailing
            among the others?
          </li>
          <li>
            Is everything like creating advanced animations, and responsive
            design smooth in Tailwind CSS?
          </li>
        </ul>
        <p className="py-8">
          Let’s say you want to build a website on your own without using any
          templates :)
        </p>
        <p>
          On that note, you should have the following beloved moment with your
          CSS file while trying to fix the look of your website.
        </p>
        <img
          src="https://media1.giphy.com/media/13FrpeVH09Zrb2/giphy.gif"
          alt="CSS"
          className="mx-auto py-6"
        />
        <p>
          Now, the process of working with any CSS file can be broadly described
          as follows:
        </p>
        <ul className="list-decimal pl-6">
          <li>
            Attach a class name to your HTML element (which eventually leads to
            complex class names for complex websites)
          </li>
          <li>
            Write some CSS code under that class name and if something&apos;s broken
            search for the respective class name and try to fix the problem.
          </li>
          <li>
            In that process, look for its respective parent and children&apos;s class
            names and their respective code blocks to look out for possible
            solutions.
          </li>
        </ul>
        <p className="pt-6">Here’s the tailwind CSS TagLine:</p>
        <blockquote className="pb-6 text-orange-600 text-xl">
          Rapidly build modern websites without ever leaving your HTML.
        </blockquote>
        <blockquote className="bg-[#f9f9f9] italic border-l-8 border-solid border-gray-400 my-10 py-2 px-2">
          <div className="h-3 text-3xl text-left text-gray-600">“</div>
          The more critical thing apart from coding for every developer is to
          have a clear picture of what’s going on. Without having a transparent
          picture, it’s incredibly difficult for anyone, regardless of how
          complex their code is to comprehend what’s happening!
          <div className="h-3 text-3xl text-right text-gray-600">”</div>
        </blockquote>
        <p className="pb-6">
          Tailwind provides the exact RESTfulness to your mind.
          <br />
          (Do not believe me?) Then try to make a simple navbar using Tailwind
          and normal HTML CSS and look at the difference as shown in the
          following codepens
        </p>
        <h2 className="underline underline-offset-4 pb-6">
          Navbar using Normal HTML CSS
        </h2>
        <div className="pb-6">
          <p
            className="codepen"
            data-height={300}
            data-default-tab="html,result"
            data-slug-hash="mdXxxzv"
            data-preview="true"
            data-user="dinakar777"
            style={{
              height: 300,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid",
              margin: "1em 0",
              padding: "1em",
            }}
          >
            <span>
              See the Pen{" "}
              <a href="https://codepen.io/dinakar777/pen/mdXxxzv">
                Tailwind Navbar
              </a>{" "}
              by Dinakar (
              <a href="https://codepen.io/dinakar777">@dinakar777</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </span>
            <Script
              async
              src="https://cpwebassets.codepen.io/assets/embed/ei.js"
            ></Script>
          </p>
        </div>
        <h2 className="underline underline-offset-4 pb-6">
          Navbar using Tailwind CSS
        </h2>
        <div className="pb-6">
          <p
            className="codepen"
            data-height={300}
            data-default-tab="html,result"
            data-slug-hash="RwQMQZV"
            data-preview="true"
            data-user="dinakar777"
            style={{
              height: 300,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid",
              margin: "1em 0",
              padding: "1em",
            }}
          >
            <span>
              See the Pen{" "}
              <a href="https://codepen.io/dinakar777/pen/RwQMQZV">
                HTML CSS NavBar
              </a>{" "}
              by Dinakar (
              <a href="https://codepen.io/dinakar777">@dinakar777</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>
          <Script
            async
            src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          ></Script>
        </div>
        <div className="pb-10">
          <span className="block pb-2 text-blue-600">Why not Bootstrap? </span>
          Look, Bootstrap is great. But if you’re a beginner, you’ll find it
          incredibly difficult to customize the components according to your
          needs. <br /> Even if you do so, again you’ve got the repeat the
          painful process of working with CSS files as mentioned earlier and
          you’ve got to choose class names that do not conflict with Bootstrap.
        </div>
        <div>
          <p className="pb-2 text-blue-600">
            What about advanced animations and responsive design?
          </p>
          If you’ve worked on the responsive design you&apos;ll agree with me the
          more we have the code side by side with what&apos;s happening on different
          screens, the better we’ll be able to see what&apos;s going on with our
          website.
          <p className="py-6">
            {" "}
            Let me present you what I mean with an example
          </p>
          {/* <CopyBlock
            text="<img class='w-16 md:w-32 lg:w-48' src='...'>"
            language="HTML"
            showLineNumbers="true"
            wrapLines
            theme={dracula}
          /> */}
          <p className="pt-2">From the above piece of code we can right away ascertain what&apos;s the width of our image without ever leaving our HTML file</p>
        </div>
      </div>
    </section>
  );
};

export default TailwindCSS;
