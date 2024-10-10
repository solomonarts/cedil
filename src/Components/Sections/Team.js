import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState("Leadership");

  // Team Data
  const teams = {
    Leadership: [
      {
        name: "Name",
        title: "Title/Position",
        image: "/path-to-image1.jpg",
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
        image: "/path-to-image2.jpg",
        social: {
          facebook: "#",
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    Management: [
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
    Development: [
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
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column: Vertical Navigation */}
        <div className="w-1/4">
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
        </div>

        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams[selectedTeam].map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md w-full rounded-lg overflow-hidden group mx-auto"
            >
              {/* Card Image */}
              {/* <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover"
              /> */}
              <Avatar
                showFallback
                className="m-auto"
                src="https://images.unsplash.com/broken"
              />
              <div className="p-4 text-center">
                {/* Member Name & Title */}
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600 bg-white">{member.title}</p>
              </div>
              {/* Social Icons (Initially hidden, appear on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 bg-transparent group-hover:bg-gray-900 group-hover:pb-8 group-hover:pt-4 group-hover:h-auto transition-all duration-300">
                <a
                  href={member.social.facebook}
                  className="text-white transform translate-y-6 group-hover:translate-y-0 transition-all"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-white transform translate-y-6 group-hover:translate-y-0 transition-all"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-white transform translate-y-6 group-hover:translate-y-0 transition-all"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.social.instagram}
                  className="text-white transform translate-y-6 group-hover:translate-y-0 transition-all"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Team Member Cards */}
      </div>
    </div>
  );
};

export default TeamSection;
