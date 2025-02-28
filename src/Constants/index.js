import InteractiveDiagram from "../Components/Diagrams/InteractiveDiagram";
import Leadership from "../Components/Diagrams/Leadership";
import VennDiagram from "../Components/Diagrams/VennDagram";
import AboutMenu from "../Components/Pages/AboutMenu";
import AboutNew from "../Components/Pages/Aboutnew";
import AboutUs from "../Components/Pages/Aboutus";
import AboutUs2 from "../Components/Pages/Aboutus2";
import Approach from "../Components/Pages/Approach";
import ContactUs from "../Components/Pages/Contact";
import ImpactCounterSection from "../Components/Sections/ImpactSection";
import SectionCard from "../Components/Sections/SectionCard";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

// import '../Assets/images/logos'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

export const bannerpics = importAll(
  require.context("../Assets/images/banner", false, /\.(png|jpe?g|svg|webp)$/)
);

export const logos = importAll(
  require.context("../Assets/images/logos", false, /\.(png|jpe?g|svg|webp)$/)
);

export const teampics = importAll(
  require.context("../Assets/images/team", false, /\.(png|jpe?g|svg|webp)$/)
);

export const icons = importAll(
  require.context("../Assets/images/icons", false, /\.(png|jpe?g|svg|webp)$/)
);

export const cardData = [
  {
    title: "Thematic Area 1",
    image: bannerpics["banner9.jpg"],
    description:
      "Advancing Gender, Health, Economic and Climate Justice for All in Africa(AGHECAAJ)",
  },
  {
    title: "Thematic Area 2",
    image: bannerpics["banner8.jpg"],
    description: "Fostering Innovations and Skilling for Development(FISD).",
  },
  {
    title: "Thematic Area 3",
    image: bannerpics["banner7.jpg"],
    description:
      "Enhancing Research and Leadership for Global Development (ERLGD).",
  },
];

export const leadersData = [
  {
    id: 1,
    name: "Obed Kabanda (PhD)",
    role: "CEO & President CEDIL Global",
    image: teampics["ceo.JPG"],
    bio: "Dr. Obed Kabanda a Seattle University Washington Doctoral Graduate and Global Leadership Fellow, brings over 22 years of experience to CEDIL Global as CEO and President having been part of the global philanthropic ecosystem influencing global aid funding and philanthropic partnerships for over two decades. His passion and experience have been in championing efforts aimed at shifting the way global development funding for gender equality, health, education, economic development, climate action, and other social change funding ecosystems can embrace locally led approaches. He has initiated, developed, and managed strategic bilateral and multilateral funding partnerships with over $200M raised at regional and global levels over 20 years with over 5 nonprofits he has worked with. He has previously worked at Global Fund for Women as Senior Director Global Partnerships and acted as Vice President of the Development Team where he coordinated 6-8 dollar-figure regional and global funding collaboratives. Obed has served as part of the World Bank Civil Society Working Group, UN Technical Working Group, and as a board member to various international organizations. He has stewarded funding cultivation and partnerships from US, EU, Canada, Netherlands, Sweden, and French governments, foundations, and high net worth individuals. Obed has also delivered on international consultancies with UNICEF, UNFPA, Norwegian People’s AID, EARTH University among others. Obed holds a Doctorate of Organizational Learning and Leadership, a Master of Public Health Leadership, a Stanford University Executive Leadership Training for Nonprofit Leaders, a Harvard University Strategic Management Training, and a Bachelors Degree of Community Leadership and Development among others. He prides in being African and supporting nonprofits, Universities, governments, and other private institutions in harnessing existing development opportunities and funding continentally and globally.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "International Advisory Board",
    image: "https://via.placeholder.com/150",
    bio: "John Smith oversees operational strategy, ensuring efficiency and scalability.",
  },
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
];

export default leadersData;

export const menu = [
  { link: "#home", label: "Home" },
  { link: "#about-us", label: "About Us" },
  { link: "#our-programs", label: "Our Programs" },
  { link: "#how-we-work", label: "How we Work" },
  { link: "#our-impact", label: "Our Impact" },
  { link: "#theory", label: "Theory" },
  { link: "#contact-us", label: "Contact" },
];

const icon_class = "w-10 h-auto";

export const socials = [
  { icon: <FaFacebook className={icon_class} />, link: "" },
  { icon: <FaInstagram className={icon_class} />, link: "" },
  { icon: <FaLinkedin className={icon_class} />, link: "" },
  { icon: <FaXTwitter className={icon_class} />, link: "" },
];

const s_icon = "tint-color w-10 h-auto";
export const contacts = [
  {
    icon: <HiOutlineMailOpen className={s_icon} />,
    label: "Send Your Email",
    contact1: "Send us a Mail",
    contact2: "info@cedilglobal.org",
  },
  {
    icon: <SlLocationPin className={s_icon} />,
    label: "Africa Office",
    contact1:
      "Africa : CEDIL Global Office, Plot 6105 Valley Road, Gayaza Road, Bethel Road, Valley Rd, Nakwero. P.O BOX 111430 Kampala Wakiso, Uganda.",
    contact2: "Tel: +256 767 150 148 / +256 745 987 878",
  },
  {
    icon: <SlLocationPin className={s_icon} />,
    label: "USA Office",
    contact1:
      "USA: Friends of CEDIL Global, 16212 Bothell-Everett Highway Suite #F123, Mill Creek, Washington 98012",
    contact2: "Tel : +1 206 482 5531",
  },
];

// content
export const contentData = {
  banner: {
    title: "Center for Development Innovations and Leadership (CEDIL) Global",
    highlightText: "CEDIL Global",
    description:
      "A registered international and regional not-for-profit organization catalyzing systemic change across Africa through innovative and rights-based development models, technologies, and leadership development.",
    imageSrc: "/path-to-your-image.jpg", // Replace with actual image path
  },
  sections: [
    {
      page: "about-us",
      title: "About Us",
      description: "",
      background: "bg-[#ffffff]", // Light green
      textColor: "", // White text
      svgbg: icons["circuit-svgrepo-com.svg"],
      element: (
        <>
          {/* <AboutUs2 />
          <AboutUs /> */}
          <AboutNew />
        </>
      ),
      patternPosition: "left", // Where the pattern is displayed
    },
    {
      page: "our-programs",
      title: "Our Programs",
      description: "",
      background: "bg-[rgba(158, 210, 99, 0.5)]", // White background
      textColor: "text-[#053744]", // Dark green text
      svgbg: icons["tree-of-rectangles-foliage-svgrepo-com.svg"],
      element: (
        <>
          <div className="mt-10 cards-grid">
            {cardData.map((card, index) => (
              <SectionCard
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </>
      ),
      patternPosition: "right",
    },
    {
      page: "how-we-work",
      title: "How We Work",
      description: "",
      clearprogram:
        "Through the well researched CLEAR framework for Leading Systems Change, CEDIL Global applies the five key elements of the systems change process in its strategic programming, budgeting and implementation.",
      background: "bg-[#ffffff]", // Light green
      textColor: "text-[#053744]", // White text
      svgbg: icons["circuit-svgrepo-com.svg"],
      element: (
        <>
          <Approach />
        </>
      ),
      patternPosition: "left",
    },
    {
      page: "our-impact",
      title: "Our Impact",
      description:
        " CEDIL Global operates in 23 African countries in collaboration with local partners, Civil Society, Universities, Urban Cities and Municipalities, Government Ministries and faith-based organizations. Our projects have provided life-changing benefits to women, youth, and children across the continent, fostering sustainable development and equitable growth.",
      background: "bg-[#053744]", // Dark green
      textColor: "text-[#ffffff]", // White text
      svgbg: icons["tree-of-rectangles-foliage-svgrepo-com.svg"],
      element: (
        <>
          <ImpactCounterSection />
        </>
      ),
      patternPosition: "right",
    },
    {
      page: "theory",
      title: "Our Theory Of Change",
      description:
        "Using the Development Systems Leadership Model, CEDIL Global catalyzes institutional and systems-level change across Africa through stakeholder engagement, empowerment, and innovation.",
      background: "bg-[#ffffff]", // Dark green
      textColor: "text-[#053744]", // White text
      svgbg: icons["tree-of-rectangles-foliage-svgrepo-com.svg"],
      element: (
        <>
          <Leadership />
        </>
      ),
      patternPosition: "right",
    },
    {
      page: "contact-us",
      title: "Contact Us",
      description: "",
      background: "bg-[#ffffff]", // White background
      textColor: "text-[#053744]", // Dark green text
      svgbg: icons["circuit-svgrepo-com.svg"],
      element: <ContactUs />,
      patternPosition: "left",
    },
  ],
};
