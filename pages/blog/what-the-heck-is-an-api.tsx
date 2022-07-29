import React from "react";
import Image from "next/image";
import { images } from "../../constants";

/*
Unhandled Runtime Error
Error: Hydration failed because the initial UI does not match what was rendered on the server.

See more info here: https://nextjs.org/docs/messages/react-hydration-error
*/

const ExplainingAPI = () => {
  return (
    <article className="prose font-semibold prose-lg lg:prose-xl w-[90%] lg:w-[50%] mx-auto font-default prose-h4:text-2xl prose-h4:font-bold prose-img:rounded-lg">
      <h2 className="text-center">What the heck is an API?</h2>
      <Image src={images.nature} alt="What is an api?" />
      <p>
        After reading this article, you should be able to answer the following
        questions to your female colleagues, buddies, or companions:
      </p>
      <ul>
        <li>What on earth does one mean by an API?</li>
        <li>
          What are these API endpoints, paths, parameters, and authentication
          people are referring to?
        </li>
        <li>Some of the examples and intuition behind the APIs</li>
      </ul>
      <p>
        Let us start with the{" "}
        <code>
          <a
            href="https://en.wikipedia.org/wiki/API#:~:text=An%20application%20programming%20interface%20(API,is%20called%20an%20API%20specification."
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            technical definition
          </a>
        </code>{" "}
        of an API
      </p>
      <blockquote className="bg-green-100 border-l-green-400 p-2">
        <p>
          An Application Programming Interface (API) is a set of commands,
          functions, protocols, and objects that programmers can use{" "}
          <b>to create software</b> or <b>interact with an external system</b>{" "}
          (server).
        </p>
      </blockquote>
      <p>
        That’s a lot of technical jargon packed in there! Let’s break it down
      </p>
      <p>
        Before breaking it down let me present an analogy of Kitchen and
        Restaurant to make you better understand the concept.
      </p>
      <h4>
        Analogy Number One:{" "}
        <span className="text-orange-500">Kitchen and Restaurant</span>
      </h4>
      <p>
        When you go to a restaurant, you&apos;re given a MENU that shows all the
        services/food items they offer to you like let&apos;s say cakes,
        sandwiches, burgers, and donuts. But out of curiosity or agitation, you
        want to taste some other items by trespassing into their kitchen, and
        then the probable outcome from a mean restaurant owner would be
        “That&apos;s none of your business. Only items from the MENU will be
        served here.&quot;
      </p>
      <p>
        Translating the above analogy into the technical world, it’s kind of
        similar to data. For every website that has its own data, be it
        Facebook, which has data of users there are certain pieces of data that
        they will allow you to access but there are other pieces that are not
        really your business.
      </p>
      <div className="bg-gray-100 px-2">
        <p>
          Question: So how can these websites (e.g., Facebook, Twitter) tell you
          what are the things that you can actually access from them and how to
          do that? <br />
          Answer: In the case of Restaurants it’s MENU. In the case of these
          websites, it’s an API.
        </p>
        <Image
          src="/static/MenuandAPI.png"
          alt="MenuAndAPI"
          width="800"
          height="600"
        />
      </div>
      <p>
        <span className="bg-yellow-200">
          An API, some people will consider being a contract.
        </span>{" "}
        It’s a contract between the data provider and the developer. And
        essentially what it says is these are all the things that developers can
        access, and these are the methods, the objects, the protocols that you
        would use to access them.
      </p>
      <p>
        Coming back to our definition, then it starts to make a little bit more
        sense, right, where an API is a set of commands, functions, protocols,
        and objects.
      </p>
      <p>
        I know it’s a bit fuzzy wrapping your mind around the above paragraphs,
        let me give you more practical examples to make it crystal clear.
      </p>
      <h6 className="bg-emerald-400 w-fit p-1">Example #1: JQuery API</h6>
      <p>
        Point 1: What are the set of functions or methods, objects or classes,
        commands, and protocols in this API?
        <ul>
          <li>Functions - add() , addBack(), addClass() </li>
          <li>Objects - event.result, event.relatedTarget</li>
        </ul>
        Point 2: Is it used to create software or interact with an external
        system?
        <ul>
          <li>
            It is used by developers like us to create a piece of software.
          </li>
        </ul>
      </p>
      <h6 className="bg-emerald-400 w-fit p-1">Example #2: OpenWeather API</h6>
      <p>
        Point 1: What are the set of functions or methods, objects or classes,
        commands, and protocols in this API?
        <ul>
          <li>Objects - “coord”, “weather”, “name”</li>
        </ul>
        Point 2: Is it used to create software or interact with an external
        system?
        <ul>
          <li>
            It is an external system that we can tap in to get the provided
            information.
          </li>
        </ul>
      </p>
      <h6 className="bg-emerald-400 w-fit p-1">Example #3: Firebase API</h6>
      <p>
        Point 1: What are the set of functions or methods, objects or classes,
        commands, and protocols in this API?
        <ul>
          <li>Functions - addDoc(), getDocs(), updateDoc() etc….</li>
          <li>Commands - `firebase login`, `firebase init` etc….</li>
        </ul>
        Point 2: Is it used to create software or interact with an external
        system?
        <ul>
          <li>
            This is both a tool for creating software and an external system
            that provides many functionalities like database, authentication,
            etc…
          </li>
        </ul>
      </p>
      <p>
        Now, when we&apos;re talking about APIs, you will often need to think
        about things including:
      </p>
      <ol>
        <li>API endpoints</li>
        <li>Paths</li>
        <li>Parameters</li>
        <li>Authentication</li>
      </ol>
      <p>
        This image would be the perfect representation of all the above four
        points:
      </p>
      <img src="/static/api4.png" alt="API terminology" />
      <blockquote className="bg-violet-100 border-l-violet-400 p-2">
        &quot;The HTTP protocol is the basis for data communication on the World
        Wide Web. It is due to this fact that any programming language (Python,
        JavaScript, C++) can be used to build a server that can communicate with
        a client (browser). So HTTP is the common language used by this client
        and server duo to communicate with each other.&quot;
      </blockquote>
      <p>
        So this is the platform used by anyone who wants to expose their API (
        through authentication) to the Internet so that it can be used by
        anyone.(interaction with the external system)
      </p>
      <p>
        Also, libraries like Keras API, Pytorch API are available through
        packages
      </p>
      <h3>Conclusion</h3>
      <p>
        So, whenever you’ve come across the term API, recall the definition and
        just analyze whether the things mentioned in the definition are present
        in that so-called API. Also, If you want to explain to someone use the
        Kitchen and restaurant analogy.
      </p>
      <p>
        Congratulations if you have made it this far. I hope you learned
        something. I appreciate your valuable time and look forward to seeing
        you in another blog post. Share if you like (optional).{" "}
      </p>
    </article>
  );
};

export default ExplainingAPI;
