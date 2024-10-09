import InteractiveDiagram from "../Components/Diagrams/InteractiveDiagram";
import Leadership from "../Components/Diagrams/Leadership";
import VennDiagram from "../Components/Diagrams/VennDagram";
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
import { FaSquareXTwitter } from "react-icons/fa6";

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

export const icons = importAll(
  require.context("../Assets/images/icons", false, /\.(png|jpe?g|svg|webp)$/)
);

export const cardData = [
  {
    title: "Themantic Area 1",
    image: bannerpics["banner3.jpg"],
    description: "Enhancing Gender & Health Justice For All In Africa",
  },
  {
    title: "Themantic Area 2",
    image: bannerpics["banner1.jpg"],
    description: "Fostering Innovations For Development",
  },
  {
    title: "Themantic Area 3",
    image: bannerpics["banner2.jpg"],
    description: "Enhancing Leadership For Global Development",
  },
];

export const menu = [
  { link: "#home", label: "Home" },
  { link: "#about-us", label: "About Us" },
  { link: "#our-programs", label: "Our Programs" },
  { link: "#how-we-work", label: "How we Work" },
  { link: "#our-impact", label: "Our Impact" },
  { link: "#theory", label: "Theory" },
  { link: "#contact-us", label: "Contact" },
];

const icon_class = "text-sm";

export const socials = [
  { icon: <FaFacebook className={icon_class} />, link: "" },
  { icon: <FaInstagram className={icon_class} />, link: "" },
  { icon: <FaLinkedin className={icon_class} />, link: "" },
];

const s_icon = "text-3xl tint-color";
export const contacts = [
  {
    icon: <HiOutlineMailOpen className={s_icon} />,
    label: "Send Your Email",
    contact1: "info@cedilglobal.org, ceo@cedilglobal.org",
    contact2: "vpglobalpartnerships@cedilglobal.org",
  },
  {
    icon: <MdOutlinePhoneInTalk className={s_icon} />,
    label: "Phone Number",
    contact1: "Africa: +256 767 150 148 / +256 745 987 878",
    contact2: "USA: +1 206 482 5531",
  },
  {
    icon: <SlLocationPin className={s_icon} />,
    label: "Location",
    contact1:
      "Africa: Plot 2553 and 2554 Nalyamagonja, Gayaza P.O BOX 111430 Kampala Wakiso, Uganda.",
    contact2: "USA: 17906 6th Ave West, Bothell, Washington- USA",
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
          <AboutUs2 />
          <AboutUs />
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
          <div className="cards-grid mt-10">
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
        " CEDIL Global operates in 23 African countries in collaboration with local partners, civil society, universities, and faith-based organizations. Our projects have provided life-changing benefits to women, youth, and children across the continent, fostering sustainable development and equitable growth.",
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
        "Using the Development Systems Leadership Model, CEDIL catalyzes institutional and systems-level change across Africa through stakeholder engagement, empowerment, and innovation.",
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
