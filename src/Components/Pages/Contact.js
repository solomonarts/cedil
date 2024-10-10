// import React from "react";
// import { RiMailFill, RiPhoneFill, RiTwitterXLine } from "react-icons/ri";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaLocationArrow,
// } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <div className="contact-card relative overflow-hidden pb-40 w-full lg:w-[87.9%]">
//       {/* <h2 className="contact-card__title">Contact Us</h2> */}

//       <div className="flex flex-col lg:flex-row gap-4 text-[#053744]">
//         <div className="flex flex-col lg:w-1/2">
//           <div className="contact-card__donate">
//             <h3 className="text-left font-semibold">Join Our Network</h3>
//             <p>
//               Become part of the movement by partnering with us or participating
//               in our programs.
//             </p>
//           </div>

//           <div className="contact-card__donate">
//             <h3 className="text-left font-semibold">Donate</h3>
//             <p>
//               Your contribution helps us continue driving systemic change in
//               Africa. Support a program of your choice today.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex justify-start content-start">
//             <p className="flex justify-center content-center gap-4 rounded-full">
//               <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
//                 <RiPhoneFill size={20} className="text-[#84c5c9] p-3 m-auto" />
//               </span>
//               <span className="m-auto"> (123) 456-7890 </span>
//             </p>
//           </div>
//           <div className="flex justify-start content-start">
//             <p className="flex justify-center align-middle content-center gap-4 rounded-full">
//               <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
//                 <RiMailFill size={20} className="text-[#84c5c9] p-3 m-auto" />
//               </span>
//               <span className="m-auto"> contact@cedil.org</span>
//             </p>
//           </div>
//           <div className="flex justify-start content-start">
//             <p className="flex text-left gap-4 rounded-full">
//               <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
//                 <FaLocationArrow
//                   size={20}
//                   className="text-[#84c5c9] p-3 m-auto"
//                 />
//               </span>
//               <span className="m-auto">1234 Development Way, Global City</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="contact-card__socials mt-5 bg-green-950 px-5 py-5 absolute w-full -bottom-8 left-0 right-0 text-[#053744]">
//         <div className="contact-card__social-icons flex justify-start align-middle">
//           <a
//             className="m-auto"
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebook size={20} className="p-2 m-auto" />
//           </a>
//           <a
//             className="m-auto"
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedinIn size={20} className="p-2 m-auto" />
//           </a>
//           <a
//             className="m-auto"
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram size={20} className="p-2 m-auto" />
//           </a>
//           <a
//             className="m-auto"
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <RiTwitterXLine size={20} className="p-2 m-auto" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import logo from "../../Assets/images/logos/cediltrans.png";
import { menu, contacts, socials } from "../../Constants/index";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "#053744", color: "#fff" }}
      className="relative rounded-lg"
    >
      {/* <img src={wave} alt="wave" className='absolute top-0 w-full h-full' /> */}
      <div className="container relative mx-auto">
        <div className="flex flex-col md:flex-row gap-8 py-16 px-20 md:px-4 lg:grid-cols-3">
          <div className="w-full md:w-1/3">
            <img src={logo} alt="CEDIL LOGO" className="h-20" />
            <p className="mt-5 text-[16px] text-left">
              At CEDIL Global, we believe that systems change is an
              ever-evolving process of adaptive experimentation, learning,
              growth and change.
            </p>
          </div>
          <div className="grid md:flex gap-10">
            <div>
              <h2 className="mb-3 text-lg font-bold text-left">Quick Links</h2>
              {menu.map((m, i) => (
                <div key={i} className=" text-left">
                  <Link to={`/` + m.link}>
                    <p className="bg-transparent text-[16px] before:content-[''] relative before:absolute before:left-0 before:top-1/2 before:bg-[#9ed263] before:h-1 before:w-3 before:rounded-lg before:-translate-y-1/2 hover:before:bg-white">{m.label}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold text-left">Contacts</h2>
              {contacts.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center content-center w-full text-left"
                >
                  {s.icon}
                  <div className="flex flex-col">
                    <p className="bg-transparent text-[16px] font-semibold">{s.contact1}</p>
                    <p className="bg-transparent text-[16px] font-semibold">{s.contact2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 text-center flex flex-col px-20 md:flex-row md:px-4 justify-between border-t">
          <div className="flex gap-3 content-center items-center mt-5 text-white">
            {socials.map((s, i) => (
              <div className="text-[12px]">{s.icon}</div>
            ))}
          </div>
          <p className="w-full mt-5 md:mt-0 md:w-1/3 content-center text-left">
            Copyright {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
