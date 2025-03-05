import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import blogpic1 from "../../Assets/images/banner/banner3.jpg";
import blogpic2 from "../../Assets/images/banner/banner4.jpg";
// import "./News.scss";

const newsData = [
  {
    id: 1,
    title: "New Innovations in AI Technology",
    image: blogpic1,
    date: "March 5, 2025",
    time: "10:00 AM",
    author: "John Doe",
    authorImage: blogpic2,
    content:
      "Under our Gender Equality Program, CEDIL Global is the local distributor of the CouldYou? Cup In East Africa with a focus on Ugagda. CouldYou? Cup is tested and innovative tool to enhancing menstrual hygiene among the many girls who for long have been challenged with the issue of period poverty. CEDIL Global is working with CouldYou? Cup to deepen an iterative approach to enhancing menstrual hygiene and are collaborating with NGOs, governments, foundations, businesses, and Rotary International to provide Cups to some of the 2 million women and girls currently on a waitlist.",
  },
  {
    id: 2,
    title: "Breakthrough in Quantum Computing",
    image: blogpic2,
    date: "March 4, 2025",
    time: "3:30 PM",
    author: "Jane Smith",
    authorImage: blogpic1,
    content: "Quantum computing is advancing at an unprecedented pace...",
  },
  // Add more news items as needed
];

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <div className="gap-6 lg:p-16 lg:flex news-container">
      {/* Main News Section */}
      <div className="p-4 bg-white rounded-lg lg:w-2/3 main-news">
        <div className="relative">
          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="object-cover w-full rounded-lg h-72"
          />
          <img
            src={selectedNews.authorImage}
            alt={selectedNews.author}
            className="author-image absolute bottom-[-40px] left-6 w-20 h-20 rounded-full border-4 border-white"
          />
        </div>
        <div className="px-6 mt-12">
          <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
          <p className="mt-1 text-sm text-gray-500">
            {selectedNews.date} | {selectedNews.time}
          </p>
          <p className="mt-4 text-gray-700">{selectedNews.content}</p>
          <div className="flex justify-end gap-3 mt-6 text-gray-600 share-icons border-[1px] w-fit float-end rounded-full px-4 py-2">
            <FaFacebookF
              className="cursor-pointer hover:text-blue-600"
              size={26}
            />
            <FaTwitter
              className="cursor-pointer hover:text-blue-400"
              size={26}
            />
            <FaLinkedin
              className="cursor-pointer hover:text-blue-700"
              size={26}
            />
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
