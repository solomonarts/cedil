import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { bannerpics, teampics } from "../../Constants";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ceopic from "../../Assets/images/team/ceo.JPG";

const TeamSection = ({ level }) => {
  const [selectedTeam, setSelectedTeam] = useState("Leadership");

  // Team Data
  const teams = {
    "Ceo and President": [
      {
        name: "Name",
        title: "Ceo and President",
        image: ceopic,
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "VP Programs & Innovations",
        image: "/path-to-image2.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "VP Strategic and Global Partnerships",
        image: "/path-to-image2.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "VP Technical Assistance and Consulting",
        image: "/path-to-image2.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    "International Advisory Board": [
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image3.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image4.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    "Innovation and Research Fellows": [
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image5.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image6.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    // "Issue-Based Working Groups": [
    //   {
    //     name: "Name",
    //     title: "Title/Position",
    //     image: "/path-to-image5.jpg",
    //     social: {
    //       facebook: "#",
    //       linkedin: "#",
    //       twitter: "#",
    //       instagram: "#",
    //     },
    //   },
    //   {
    //     name: "Name",
    //     title: "Title/Position",
    //     image: "/path-to-image6.jpg",
    //     social: {
    //       facebook: "#",
    //       linkedin: "#",
    //       twitter: "#",
    //       instagram: "#",
    //     },
    //   },
    // ],
    Careers: [
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image5.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image6.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
  };

  return (
    <div className="container">
      {/* Left Column: Vertical Navigation */}
      {/* <div className="w-1/4">
          <ul className="text-lg font-semibold">
            {Object.keys(teams).map((team, index) => (
              <li
                key={index}
                onClick={() => setSelectedTeam(team)}
                className={`py-4 cursor-pointer ${
                  selectedTeam === team ? "text-blue-500" : "text-gray-700"
                } hover:text-blue-500 transition`}
              >
                {team}
              </li>
            ))}
          </ul>
        </div> */}

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
        {teams[level].map((member, index) => (
          <div
            key={index}
            class="team-card group relative bg-white shadow-lg rounded-lg overflow-hidden min-w-[200px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-80 mx-auto"
          >
            {/* <!-- Image (full card) --> */}
            <img
              src={member.image}
              alt="User Image"
              class="h-full w-full object-contain"
            />

            {/* <!-- Initial Overlay (white at the bottom) --> */}
            <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 h-1/2 flex flex-col justify-center items-center px-4 py-8 transition-all duration-500 ease-in-out group-hover:h-full group-hover:bg-black group-hover:bg-opacity-70 group-hover:content-center group-hover:text-white">
              {/* <!-- Name & Position --> */}
              <h2 class="font-bold text-lg text-gray-800 group-hover:text-white transition-all duration-500">
                {member.name}
              </h2>
              <p class="text-sm text-gray-500 group-hover:text-white transition-all duration-500">
                {member.title}
              </p>

              {/* <!-- Social Media Icons --> */}
              <div class="social-icons mt-4 flex justify-center space-x-4">
                <a
                  href="#"
                  class="text-gray-500 group-hover:text-white transition-all duration-300 ease-in-out hover:text-[#9ed263]"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  class="text-gray-500 group-hover:text-white transition-all duration-300 ease-in-out hover:text-[#9ed263]"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  class="text-gray-500 group-hover:text-white transition-all duration-300 ease-in-out hover:text-[#9ed263]"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Team Member Cards */}
    </div>
  );
};

export default TeamSection;
