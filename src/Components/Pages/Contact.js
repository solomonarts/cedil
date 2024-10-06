import React from "react";
import { RiMailFill, RiPhoneFill, RiTwitterXLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-card relative overflow-hidden pb-40 w-full lg:w-[87.9%]">
      {/* <h2 className="contact-card__title">Contact Us</h2> */}

      <div className="flex flex-col lg:flex-row gap-4 text-[#2f4f2f]">
        <div className="flex flex-col lg:w-1/2">
          <div className="contact-card__donate">
            <h3 className="text-left font-semibold">Join Our Network</h3>
            <p>
              Become part of the movement by partnering with us or participating
              in our programs.
            </p>
          </div>

          <div className="contact-card__donate">
            <h3 className="text-left font-semibold">Donate</h3>
            <p>
              Your contribution helps us continue driving systemic change in
              Africa. Support a program of your choice today.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-5">
          <div className="flex justify-start content-start">
            <p className="flex justify-center content-center gap-4 rounded-full">
              <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
                <RiPhoneFill size={20} className="text-[#9ed263] p-3 m-auto" />
              </span>
              <span className="m-auto"> (123) 456-7890 </span>
            </p>
          </div>
          <div className="flex justify-start content-start">
            <p className="flex justify-center align-middle content-center gap-4 rounded-full">
              <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
                <RiMailFill size={20} className="text-[#9ed263] p-3 m-auto" />
              </span>
              <span className="m-auto"> contact@cedil.org</span>
            </p>
          </div>
          <div className="flex justify-start content-start">
            <p className="flex text-left gap-4 rounded-full">
              <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
                <FaLocationArrow
                  size={20}
                  className="text-[#9ed263] p-3 m-auto"
                />
              </span>
              <span className="m-auto">1234 Development Way, Global City</span>
            </p>
          </div>
        </div>
      </div>

      <div className="contact-card__socials mt-5 bg-green-950 px-5 py-5 absolute w-full -bottom-8 left-0 right-0 text-[#2f4f2f]">
        <div className="contact-card__social-icons flex justify-start align-middle">
          <a
            className="m-auto"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} className="p-2 m-auto" />
          </a>
          <a
            className="m-auto"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} className="p-2 m-auto" />
          </a>
          <a
            className="m-auto"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} className="p-2 m-auto" />
          </a>
          <a
            className="m-auto"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine size={20} className="p-2 m-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
