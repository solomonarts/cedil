import React from "react";
import themanticpg from "../../Assets/images/banner/banner3.jpg";

const ThematicAreas = () => {
  const thematicAreas = [
    {
      title: "Enhancing Gender & Health Justice for All in Africa",
      points: [
        "Advancing Gender Equitable Economies, Menstrual Health and Gendered Financing for Climate Justice",
        "Develop & Implement an Afri-Institutional Capacity Development – IQC Platform & Fellowships",
        "Re-imagining Innovative response to Anti-corruption & Illicit Financial Flows",
      ],
    },
    {
      title: "Powering Innovations 4 Development",
      points: [
        "Africities Innovations Forum Fellowship",
        "Youth Livelihood, Innovation & Employment Hub",
        "Africa Digital Talks Media Channel",
        "Flexible Development Finance",
      ],
    },
    {
      title: "Enhancing Leadership for Global Development",
      points: [
        "Construct a CEDIL Global Center",
        "Establish & Run a Global Leadership Program",
        "Run a Certified Nonprofit Executive & Board Leadership Fellowship",
        "Global Leadership Fundraising & Partnerships Strategy",
      ],
    },
  ];

  return (
    <div className="thematic-areas-container flex flex-row mt-10">
      <div className="h-1/2 w-2/5 relative rounded-md overflow-hidden">
        <div className="absolute h-full w-full bg-black/30 justify-center content-center">
          <h4 className="text-[30px] text-white text-wrap text-center">
            Themantic Areas
          </h4>
        </div>
        <img src={themanticpg} />
      </div>
      <div className="flex gap-5 justify-center">
        {thematicAreas.map((area, index) => (
          <div key={index} className="column">
            <div className="title-box">
              <h3>{area.title}</h3>
              {/* <svg className="wavy-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#6cc644" strokeWidth="2" fill="none"/>
                <circle cx="0" cy="5" r="3" fill="#6cc644"/>
                <polygon points="98,5 94,3 94,7" fill="#6cc644"/>
              </svg> */}
            </div>
            <ul className="text-left list-disc">
              {area.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicAreas;
