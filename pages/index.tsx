import {
  About,
  Blogs,
  Contact,
  Home,
  Navbar,
  Skills,
  Work,
} from "../components";
import {BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';

function App() {
  return (
    <div className="relative font-default">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Blogs/>
      <Contact />
      <div className="fixed left-5 bottom-10 my-auto scale-110">
        <div className="flex flex-col gap-4">
          <BsGithub className=""/>
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
      <div className="fixed right-2 top-1/2 my-auto scale-110">
        <ul className="flex flex-col gap-5">
        {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
          <a key={index} href={`#${item}`} className="w-2 h-2 rounded-full bg-primary cursor-pointer"/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
