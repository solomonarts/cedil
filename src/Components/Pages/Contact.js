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
//             <h3 className="font-semibold text-left">Join Our Network</h3>
//             <p>
//               Become part of the movement by partnering with us or participating
//               in our programs.
//             </p>
//           </div>

//           <div className="contact-card__donate">
//             <h3 className="font-semibold text-left">Donate</h3>
//             <p>
//               Your contribution helps us continue driving systemic change in
//               Africa. Support a program of your choice today.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-start gap-5">
//           <div className="flex content-start justify-start">
//             <p className="flex content-center justify-center gap-4 rounded-full">
//               <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
//                 <RiPhoneFill size={20} className="text-[#84c5c9] p-3 m-auto" />
//               </span>
//               <span className="m-auto"> (123) 456-7890 </span>
//             </p>
//           </div>
//           <div className="flex content-start justify-start">
//             <p className="flex content-center justify-center gap-4 align-middle rounded-full">
//               <span className="bg-white rounded-full w-[60px] flex justify-center content-center h-auto m-auto aspect-square">
//                 <RiMailFill size={20} className="text-[#84c5c9] p-3 m-auto" />
//               </span>
//               <span className="m-auto"> contact@cedil.org</span>
//             </p>
//           </div>
//           <div className="flex content-start justify-start">
//             <p className="flex gap-4 text-left rounded-full">
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
//         <div className="flex justify-start align-middle contact-card__social-icons">
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
import { logos, menu, contacts, socials } from "../../Constants/index";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

// function Footer() {
//   return (
//     <div
//       style={{ backgroundColor: "#053744", color: "#fff" }}
//       className="relative rounded-lg"
//     >
//       {/* <img src={wave} alt="wave" className='absolute top-0 w-full h-full' /> */}
//       <div className="container relative mx-auto">
//         <div className="flex flex-col gap-8 px-20 py-16 md:flex-row md:px-4 lg:grid-cols-3">
//           <div className="w-full md:w-1/3">
//             <img
//               src={logo}
//               alt="CEDIL LOGO"
//               className="w-full h-auto aspect-auto"
//             />
//             <p className="mt-5 text-[16px] text-left">
//               At CEDIL Global, we believe that systems change is an
//               ever-evolving process of adaptive experimentation, learning,
//               growth and change.
//             </p>
//           </div>
//           <div className="grid gap-10 md:flex">
//             <div>
//               <h2 className="mb-3 text-lg font-bold text-left">Quick Links</h2>
//               {menu.map((m, i) => (
//                 <div key={i} className="text-left ">
//                   <Link to={`/` + m.link}>
//                     <p className="bg-transparent text-[16px] before:content-[''] relative before:absolute before:left-0 before:top-1/2 before:bg-[#9ed263] before:h-1 before:w-3 before:rounded-lg before:-translate-y-1/2 hover:before:bg-white">
//                       {m.label}
//                     </p>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <h2 className="mb-3 text-lg font-bold text-left">Contacts</h2>
//               {contacts.map((s, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center content-center w-full text-left"
//                 >
//                   {s.icon}
//                   <div className="flex flex-col">
//                     <p className="bg-transparent text-[16px] font-semibold">
//                       {s.contact1}
//                     </p>
//                     <p className="bg-transparent text-[16px] font-semibold">
//                       {s.contact2}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between p-4 px-20 text-center border-t md:flex-row md:px-4">
//           <div className="flex items-center content-center gap-3 mt-5 text-white">
//             {socials.map((s, i) => (
//               <div className="text-[12px]">{s.icon}</div>
//             ))}
//           </div>
//           <p className="content-center w-full mt-5 text-left md:mt-0 md:w-1/3">
//             Copyright {new Date().getFullYear()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

const Footer = () => {
  return (
    <footer className="bg-[#033f47] p-10 md:p-16 border-t-8 border-white rounded-b-2xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 text-white md:grid-cols-3">
          {/* Left Section - Logo & About */}
          <div>
            <div className="flex items-center space-x-2">
              {/* Replace with your actual logo */}
              <span className="text-3xl font-bold text-green-400">
                <img
                  src={logos["cedilwhite.png"]}
                  alt="CEDIL LOGO"
                  className="w-full h-auto aspect-auto"
                />
              </span>
            </div>
            <p className="p-4 mt-4 text-sm bg-green-900 rounded-lg">
              At CEDIL Global, we believe that systems change is an
              ever-evolving process of adaptive experimentation, learning,
              growth, and change.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="pl-5">
            <h4 className="mb-3 text-lg font-semibold text-left">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {menu.map((m, clink) => (
                <li key={clink} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <Link to={`/` + m.link} className="hover:text-green-400">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="mb-3 text-lg font-semibold text-left">Contacts</h4>
            <p className="flex items-start space-x-2">
              📧{" "}
              <a
                href="mailto:info@cedilglobal.org"
                className="hover:text-green-400"
              >
                info@cedilglobal.org
              </a>
            </p>
            <p className="flex gap-4 mt-3 text-left">
              <FaLocationArrow size={30} />
              African Office: Plot 6105 Valley Road, Gayaza Road, Bethel Road,
              Valley Rd, Nakwero. P.O BOX 111430 Kampala Wakiso, Uganda.
            </p>
            <p className="flex gap-4 mt-1 text-left">
              <FaPhone /> +256 767 150 148 / +256 745 987 878
            </p>
            <p className="flex gap-4 mt-3 text-left">
              <FaLocationArrow size={30} /> USA: Friends of CEDIL Global USA,
              16212 Bothell-Everett Highway Suite #F123, Mill Creek, Washington
              98012
            </p>
            <p className="flex gap-4 mt-1 text-left">
              <FaPhone /> +1 206 482 5531
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-white md:flex-row">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socials.map((s, sindx) => (
              <a
                key={sindx}
                href="#"
                className="p-2 transition bg-green-900 rounded-full hover:bg-green-400"
              >
                <div className="text-[8px] text-white">{s.icon}</div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="px-4 py-2 mt-4 text-white bg-green-900 rounded-lg md:mt-0">
            Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
