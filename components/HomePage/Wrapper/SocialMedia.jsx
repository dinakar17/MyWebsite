import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="self-end flex gap-5 flex-col p-2">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
