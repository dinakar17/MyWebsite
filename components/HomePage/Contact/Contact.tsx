import Image from "next/image";
import { images } from "../../../constants";

const Contact = () => {
  return (
    <section className="min-h-screen overflow-auto">
        {/* Note: Without overflow-auto my-[10%] applies to 'section'(parent) element instead below div(child) element */}
        <h4 className="text-center text-5xl font-bold mt-[5%]">Get in Touch with me</h4>
        <div className="w-[80%] mx-auto grid md:grid-flow-col md:auto-cols-[1fr] text-center md:text-left my-[5%] gap-10">
            <div className="flex justify-center items-center">
            {/* Card */}
            <div className="w-72 h-96 custom-shadow rounded-lg">
                <div className="h-1/2"><Image src={images.person} alt="profile" className="w-full h-full object-cover rounded-t-lg"/></div>
                <div>
                    <p>Email Address</p>
                    <p>Phone number</p>
                    {/* Icons */}
                </div>
            </div>
            </div>
            <form className="flex flex-col justify-center gap-10">
                <input placeholder="Enter your name" className="border-primary border-4 rounded-lg p-2 outline-none"/>
                <input placeholder="Please enter your email address here..." className="border-primary border-4 rounded-lg p-2 outline-none"/>
                <textarea placeholder="Please enter your message here..." rows={4} className="border-primary border-4 rounded-lg p-2 outline-none"/>
                <button type="submit" className="bg-primary p-3 mx-auto rounded-full text-white font-bold custom-shadow">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact