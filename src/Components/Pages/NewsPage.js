import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import blogpic1 from "../../Assets/images/news/PHOTO-2025-02-25-17-28-13.jpg";
import blogpic2 from "../../Assets/images/banner/banner4.jpg";
import ceopic from "../../Assets/images/team/ceo.JPG";
import aurhorpic from "../../Assets/images/team/hariet1.JPG";
import ImageBox2 from "../ImageContainer/ImageBox2";
import { FaXTwitter } from "react-icons/fa6";
// import "./News.scss";

const newsData = [
  {
    id: 1,
    title:
      "Dr. Obed Kabanda takes on a new role as CEDIL Global CEO and President",
    image: ceopic,
    date: "Feburary 4, 2025",
    time: "3:30 PM",
    author: `Harriet Akullu\n
    International Advisory Board Chair\n
    CEDIL Global`,
    authorImage: aurhorpic,
    content: `On behalf of the International Advisory Board of CEDIL Global, I am delighted to extend a warm welcome to Dr. Obed Kabanda as the new CEO and President of our esteemed organization.\n
    Dr. Kabanda brings a wealth of experience and expertise in global fundraising and partnerships, global health, human rights, development financing, philanthropic engagement, and leadership development all of which will undoubtedly propel CEDIL Global to even greater heights. His passion for African-led solutions, gender, economic and climate justice, and empowerment of young people aligns perfectly with CEDIL Global mission and values.\n
    As the International Advisory Board Chair, I have had the pleasure of working closely with Dr. Kabanda while he worked at Global Fund for Women, and as I worked at UNICEF headquarters New York. I can attest to his exceptional leadership skills, strategic thinking, passion for philanthropy and collaborative spirit.\n
    As a global leadership fellow, graduate of Seattle University Doctorate of Organizational Learning and Leadership, and a Stanford University Executive Leadership alumni among others, I have no doubt that through his leadership CEDIL Global will thrive and make meaningful impact in the lives of communities across Africa and globally.\n
    Please join me in congratulating Dr. Kabanda on his new role and in welcoming him to the CEDIL Global family. We look forward to working closely with him to advance our shared vision of a more equitable, just, and prosperous Africa.`,
  },
  {
    id: 2,
    title: "CEDIL Global Launches a Partnership with CouldYou?Cup USA ",
    image: blogpic1,
    date: "March 5, 2025",
    time: "10:00 AM",
    author: `Harriet Akullu\n
    International Advisory Board Chair\n
    CEDIL Global`,
    authorImage: aurhorpic,
    content: `Under our Gender Equality Program, CEDIL Global is the local distributor of the CouldYou? Cup In East Africa with a focus on Uganda.\n 
     CouldYou? Cup is tested and innovative tool to enhancing menstrual hygiene among the many girls who for long have been challenged with the issue of period poverty.\n 
     CEDIL Global is working with CouldYou? Cup to deepen an iterative approach to enhancing menstrual hygiene and are collaborating with NGOs, governments, foundations, businesses, and Rotary International to provide Cups to some of the 2 million women and girls currently on a waitlist.`,
  },
  // Add more news items as needed
];

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <div className="gap-6 lg:p-16 lg:flex news-container">
      {/* Main News Section */}
      <div className="flex flex-col p-4 bg-white rounded-lg lg:w-2/3 main-news">
        <div className="relative">
          {/* <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="object-cover w-full rounded-lg h-80"
          /> */}
          <ImageBox2 imageSrc={selectedNews.image} />
          <img
            src={selectedNews.authorImage}
            alt={selectedNews.author}
            className="author-image absolute bottom-[-40px] left-6 w-20 h-20 rounded-full border-4 object-contain bg-slate-800 border-white"
          />
        </div>
        <div className="flex flex-col px-6 mt-12">
          <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
          <p className="mt-1 text-sm text-gray-500 w-fit">
            {selectedNews.date} | {selectedNews.time}
          </p>
          <p className="mt-4 text-gray-700 bg-slate-400/5">
            {/* {selectedNews.content} */}
            {selectedNews.content.split("\n").map((line, cindex) => (
              <span key={cindex}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p style={{ lineHeight: "0.8", fontWeight: "700", fontSize: "16px" }}>
            {selectedNews.author.split("\n").map((line, aindex) => (
              <span key={aindex}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="flex justify-end gap-3 mt-6 text-gray-600 share-icons border-[1px] w-fit self-end float-end rounded-full px-4 py-2">
            <FaFacebookF
              className="cursor-pointer hover:text-blue-600"
              size={26}
            />
            <a href="https://x.com/cedilglobal?s=21&t=LCnJdsE5HtvBYsYTM3iiaQ">
              <FaXTwitter
                className="cursor-pointer hover:text-blue-400"
                size={26}
              />
            </a>
            <a href="https://www.linkedin.com/showcase/cedil-global/">
              <FaLinkedin
                className="cursor-pointer hover:text-blue-700"
                size={26}
              />
            </a>
            <FaWhatsapp
              className="cursor-pointer hover:text-green-500"
              size={26}
            />
          </div>
        </div>
      </div>

      {/* News Sidebar */}
      <div className="p-4 bg-white rounded-lg shadow-lg lg:w-1/3 news-sidebar">
        <h3 className="mb-4 text-lg font-semibold">Latest News</h3>
        <div className="flex flex-col gap-3 news-list">
          {newsData.map((news) => (
            <div
              key={news.id}
              className={`news-item p-3 rounded-lg cursor-pointer ${
                selectedNews.id === news.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedNews(news)}
            >
              <h4 className="font-medium">{news.title}</h4>
              <p className="text-xs text-gray-500">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
