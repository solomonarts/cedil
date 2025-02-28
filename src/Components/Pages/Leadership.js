import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { teampics } from "../../Constants";
import ceopic from "../../Assets/images/team/ceo.JPG";

const teams = {
  "Executive Team": [
    {
      id: 1,
      name: "Obed Kabanda (PhD)",
      role: "CEO & President CEDIL Global",
      image: ceopic,
      bio: "Dr. Obed Kabanda a Seattle University Washington Doctoral Graduate and Global Leadership Fellow, brings over 22 years of experience to CEDIL Global as CEO and President having been part of the global philanthropic ecosystem influencing global aid funding and philanthropic partnerships for over two decades. His passion and experience have been in championing efforts aimed at shifting the way global development funding for gender equality, health, education, economic development, climate action, and other social change funding ecosystems can embrace locally led approaches. He has initiated, developed, and managed strategic bilateral and multilateral funding partnerships with over $200M raised at regional and global levels over 20 years with over 5 nonprofits he has worked with. He has previously worked at Global Fund for Women as Senior Director Global Partnerships and acted as Vice President of the Development Team where he coordinated 6-8 dollar-figure regional and global funding collaboratives. Obed has served as part of the World Bank Civil Society Working Group, UN Technical Working Group, and as a board member to various international organizations. He has stewarded funding cultivation and partnerships from US, EU, Canada, Netherlands, Sweden, and French governments, foundations, and high net worth individuals. Obed has also delivered on international consultancies with UNICEF, UNFPA, Norwegian People’s AID, EARTH University among others. Obed holds a Doctorate of Organizational Learning and Leadership, a Master of Public Health Leadership, a Stanford University Executive Leadership Training for Nonprofit Leaders, a Harvard University Strategic Management Training, and a Bachelors Degree of Community Leadership and Development among others. He prides in being African and supporting nonprofits, Universities, governments, and other private institutions in harnessing existing development opportunities and funding continentally and globally.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "International Advisory Board",
      image: "https://via.placeholder.com/150",
      bio: "John Smith oversees operational strategy, ensuring efficiency and scalability.",
    },
  ],
  "Advisory Board": [
    {
      id: 3,
      name: "Sarah Lee",
      role: "Innovation and Research Fellows",
      image: "https://via.placeholder.com/150",
      bio: "Sarah Lee brings extensive governance experience, guiding the strategic direction of our organization.",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Issue-Based Working Groups",
      image: "https://via.placeholder.com/150",
      bio: "Michael Brown has advised numerous global organizations on policy development and international collaborations.",
    },
    {
      id: 5,
      name: "Michael",
      role: "Careers",
      image: "https://via.placeholder.com/150",
      bio: "Michael Brown has advised numerous global organizations on policy development and international collaborations.",
    },
  ],
};

const Leadership = () => {
  const { id } = useParams(); // Get leader ID from URL
  const teamNames = Object.keys(teams);
  const [selectedTeam, setSelectedTeam] = useState(teamNames[0]);
  const [selectedLeader, setSelectedLeader] = useState(null);

  useEffect(() => {
    // Find leader in any team
    let foundLeader = null;
    let foundTeam = teamNames.find((team) => {
      foundLeader = teams[team].find((leader) => leader.id === parseInt(id));
      return foundLeader;
    });

    // If leader exists, set team & leader
    if (foundLeader) {
      setSelectedTeam(foundTeam);
      setSelectedLeader(foundLeader);
    } else {
      setSelectedLeader(teams[selectedTeam][0]); // Default leader if none found
    }
  }, [id]);

  return (
    <div className="p-6 mx-auto max-w-7xl md:p-10">
      <h2 className="mb-6 text-3xl font-semibold text-center">Leadership</h2>

      {/* Team Tabs */}
      <div className="flex pb-2 space-x-4 overflow-x-auto border-b">
        {teamNames.map((team) => (
          <button
            key={team}
            onClick={() => {
              setSelectedTeam(team);
              setSelectedLeader(teams[team][0]);
            }}
            className={`px-4 py-2 text-sm font-semibold border-b-2 ${
              selectedTeam === team
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500"
            } hover:text-green-600`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Selected Leader Biography */}
      {selectedLeader && (
        <div className="flex flex-col items-center p-6 mt-6 bg-white rounded-lg shadow-md md:flex-row md:items-start">
          <img
            src={selectedLeader.image}
            alt={selectedLeader.name}
            className="object-cover w-1/3 rounded-lg h-1/4"
          />
          <div className="mt-4 md:ml-6 md:mt-0">
            <h3 className="text-2xl font-semibold">{selectedLeader.name}</h3>
            <p className="font-medium text-green-700">{selectedLeader.role}</p>
            <p className="mt-2 text-gray-700">{selectedLeader.bio}</p>
          </div>
        </div>
      )}

      {/* Other Leaders in Selected Team */}
      <div className="mt-6">
        <h4 className="mb-3 text-lg font-semibold">Meet the Team</h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {teams[selectedTeam].map((leader, lindx) => (
            <div
              key={lindx}
              onClick={() => setSelectedLeader(leader)}
              class="team-card group relative bg-white shadow-lg rounded-lg overflow-hidden min-w-[200px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-80 mx-auto"
            >
              {/* <!-- Image (full card) --> */}
              <img
                src={leader.image}
                alt="User Image"
                class="h-full w-full object-contain"
              />

              {/* <!-- Initial Overlay (white at the bottom) --> */}
              <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 h-1/2 flex flex-col justify-center items-center px-4 py-8 transition-all duration-500 ease-in-out group-hover:h-full group-hover:bg-black group-hover:bg-opacity-70 group-hover:content-center group-hover:text-white">
                {/* <!-- Name & Position --> */}
                <h2 class="font-bold text-lg text-gray-800 group-hover:text-white transition-all duration-500">
                  {leader.name}
                </h2>
                <p class="text-sm text-gray-500 group-hover:text-white transition-all duration-500">
                  {leader.title}
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
      </div>
    </div>
  );
};

export default Leadership;
