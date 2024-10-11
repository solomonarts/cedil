import React, { useState } from "react";
import themanticpg from "../../Assets/images/banner/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules"; // Import Swiper's Thumbs module
import "swiper/css";
import "swiper/css/thumbs";

const ThematicAreas = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thematicAreas = [
    {
      title:
        "Advancing Gender, Health, Economic and Climate Justice for All in Africa(AGHECAAJ)",
      points: [
        "Advancing Gender Equitable Economies, and Gendered Financing for Climate Justice including the intersection of health and climate justice.",
        "Co-create and Implement multi-country collaboratives and programs for addressing obstacles to menstrual hygiene, maternal, newborn, child, and youth health.",
        "Develop and Implement an Afri-Institutional Capacity Development – ICD Platform and Fellowships.",
        "Re-imagine Social Sector Development in urban settings through Innovative response to Anti-corruption and Illicit Financial Flows in cities and municipalities.",
      ],
    },
    {
      title: "Fostering Innovations and Skilling for Development(FISD).",
      points: [
        "Co-create Africa Cities Innovations and Employment Hubs to reduce Global North Migration.",
        "Support Women, Girls and Youth Livelihood and Economic Empowerment Programs.",
        "Run an Afri-Lead Talk Media Channel to highlight Africa Innovations and Developments.",
        "Launch and manage a Flexible Development Innovations Fund for Africa Rockstars.",
        "Promote a Human Rights-Based Approach to Development Programming",
      ],
    },
    {
      title: "Enhancing Research and Leadership for Global Development (ERLGD).",
      points: [
        "Construct a CEDIL Global Center",
        "Establish and Run a Global Leadership Institute includiing Running Annual Leadership and Philanthropic Awards.",
        "Run a Certified Nonprofit Executive and Board Leadership Fellowship.",
        "Providing Technical Assistance and Expertise in Fundraising, Strategic Partnerships, and Grants Management Leadership to other Nonprofits and Africa Universities.",
        "Develop and Implement Global South-South and Global North-South Research Partnerships and Fellowships.",
        "Establish an Africa Journal for Local Solutions, Innovations, and Leadership Development (AJLSILD)."
      ],
    },
  ];

  return (
    <div className="thematic-areas-container flex xl:flex-row flex-col mt-10 overflow-hidden">
      <div className="h-1/2 w-full xl:w-2/5 mr-5 relative rounded-md overflow-hidden">
        <div className="absolute h-full w-full bg-black/30 justify-center content-center">
          <h4 className="text-[30px] text-white text-wrap text-center">
            Thematic Areas
          </h4>
        </div>
        <img src={themanticpg} />
      </div>

      {/* Right Column: Thematic Areas Slider */}
      <div className="xl:w-1/2 p-4">
        {/* Main Slider */}
        <Swiper
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }} // Safe checking thumbsSwiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="main-swiper"
        >
          {thematicAreas.map((area, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div
                key={index}
                className="column w-full p-2 relative bg-[#05374413] h-full"
              >
                <div className="title-box bg-[#053744] text-white">
                  <h3>{area.title}</h3>
                  {/* <svg className="wavy-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#6cc644" strokeWidth="2" fill="none"/>
                <circle cx="0" cy="5" r="3" fill="#6cc644"/>
                <polygon points="98,5 94,3 94,7" fill="#6cc644"/>
              </svg> */}
                </div>
                <ul className="text-left text-[16px]">
                  {area.points.map((point, i) => (
                    <li className="border-b-2 border-white" key={i}>
                      {point}
                    </li>
                  ))}
                </ul>

                <span className="text-[#9ed263] opacity-20 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark">
                  {index + 1}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Slider */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          spaceBetween={10}
          watchSlidesProgress={true}
          className="thumbnail-swiper mt-4"
        >
          {thematicAreas.map((area, index) => (
            <SwiperSlide key={index}>
              <div className="p-2 bg-gray-200 rounded-lg text-center cursor-pointer hover:bg-gray-300">
                <p className="text-sm font-semibold text-wrap line-clamp-3">
                  Thematic Area {index + 1}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThematicAreas;
