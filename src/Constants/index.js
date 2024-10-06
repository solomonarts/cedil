import InteractiveDiagram from "../Components/Diagrams/InteractiveDiagram";
import Leadership from "../Components/Diagrams/Leadership";
import VennDiagram from "../Components/Diagrams/VennDagram";
import AboutUs from "../Components/Pages/Aboutus";
import AboutUs2 from "../Components/Pages/Aboutus2";
import Approach from "../Components/Pages/Approach";
import ContactUs from "../Components/Pages/Contact";
import ImpactCounterSection from "../Components/Sections/ImpactSection";
import SectionCard from "../Components/Sections/SectionCard";

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
      element: <AboutUs2 />,
      patternPosition: "left", // Where the pattern is displayed
    },
    {
      page: "our-programs",
      title: "Our Programs",
      description: "",
      background: "bg-[#ecf7e0]", // White background
      textColor: "text-[#2f4f2f]", // Dark green text
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
      description:
        "CEDIL Global employs a Systems Leadership Approach that combines a rights-based programming and a deep understanding of systemic dynamics, stakeholder engagement, and collaborative leadership. Our work is designed to drive change across Africa by mobilizing large networks of diverse actors to achieve a common goal.",
      cleaarprogram:
        "Through the well researched CLEAR framework for Leading Systems Change, CEDIL Global applies the five key elements of the systems change process in its strategic programming, budgeting and implementation.",
      background: "bg-[#ffffff]", // Light green
      textColor: "text-[#2f4f2f]", // White text
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
      background: "bg-[#2f4f2f]", // Dark green
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
      textColor: "text-[#2f4f2f]", // White text
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
      background: "bg-[#2f4f2f49]", // White background
      textColor: "text-[#ffffff]", // Dark green text
      svgbg: icons["circuit-svgrepo-com.svg"],
      element: <ContactUs />,
      patternPosition: "left",
    },
  ],
};
