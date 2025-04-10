import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import blogpic1 from "../../Assets/images/news/PHOTO-2025-02-25-17-28-13.jpg";
import blogpic2 from "../../Assets/images/banner/banner4.jpg";
import ceopic from "../../Assets/images/team/ceo.JPG";
import ceonews from "../../Assets/images/news/ceonews.png";
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
  {
    id: 3,
    title: "CEO AND PRESIDENT APRIL 2025 MESSAGE",
    image: ceonews,
    date: "April 9, 2025",
    time: "10:00 AM",
    author: `Thank you!\n
    Sincerely,\n
    Dr. Obed Kabanda \n
    CEO and President, CEDIL Global`,
    authorImage: ceopic,
    content: `Dear esteemed development partners, funders, well-wishers and partner countries,\n 
    I am writing to you today as the newly appointed CEO and President of CEDIL Global, and I am honored to have the opportunity to lead this organization. In its mission of fostering innovative, locally driven collaboratives and evidence-based solutions in Africa, CEDIL Global addresses the continent’s health, gender, economic and climate development challenges through strategic partnerships, grantmaking, institutional capacity strengthening, research, and systems leadership development. As an African leader with wide global perspectives, and with fresh lived experiences after 15 years of early carrier in the philanthropic ecosystem on the African continent prior to serving additional 7 years internationally, I am excited to work alongside each of you as our partners. We will together drive meaningful changes through our systems- and-evidence- based philanthropic engagement efforts that will continue to center power to the local organizations proximate to Africa’s pressing health, gender, economic and climate problems including those vulnerable populations in the growing Africa cities.\n 
    As I take on this new role, I want to express my deepest gratitude to each of you for your ongoing support and partnership. Your trust in CEDIL Global’s mission and vision has been instrumental in enabling us to make a positive impact in the lives of millions of girls, women and men around the world. And we will endeavor to remain committed to co-creating philanthropic mechanisms and collaboratives for health, leadership development, gender, economic and climate justice for all in Africa.\n
    As you might already know, philanthropy in Africa has had a rich history, with diverse forms of giving and support across the continent through individual, community and corporate giving. However, despite these efforts, Africa continues to face significant challenges in areas such as health, gender, economic, and climate justice with millions of girls, women and boys facing the most brunt of the impact. This has been exacerbated by the current drastic changes in the global aid system with most developed country governments reducing their foreign and overseas development assistance (ODA) giving levels or even the halting of very important funding streams like in the case of USAID that has seen abrupt halting of over $8billion of aid to Africa in February 2025 .\n
    Some of the challenges have included limited philanthropic infrastructural mechanisms characterized by weak organization hindering the delivery of philanthropic services and programs on the continent. A limited coordination that has been characterized by the absence of effective systems and collaboratives that have often led to duplication of efforts, inefficiencies, and reduced impact. And finally, the challenge of inadequate funding exacerbated by not only limited resources but also by the lack of intentional mechanisms for deepening giving practices and philanthropic engagements to influence the growing list of African wealthy and prospering individuals and corporations to embrace philanthropy that centers gender, climate and economic justice. A 2024 report from The Bridgespan Group indicate that sixty percent of existing African collaborations have annual budgets below $10 million, and most of these are limited to addressing education and health issues with Gender, Climate and Economic collaboratives accounting for only 11%, 4% and 16% respectively.\n
    To address these challenges, CEDIL Global’s approach is embracing a growing global recognition of the need for: Fostering Strategic Issue-Specific collaboratives: At CEDIL Global this will include applying a systems leadership approach to building partnerships between philanthropic organizations, governments, regional and continental mechanisms, local grantee partners and communities to help leverage resources and expertise for addressing the most pressing health, gender, economic and climate justice challenges in Africa. We will be building on our existing local partnerships and forge new ones to bring together diverse stakeholders, and leveraging our collective expertise and resources to achieve greater impact through our CLEAR Framework for Leading Systems Change.\n
    Innovative philanthropic mechanisms: At CEDIL Global we are co-creating with different partners while exploring and fostering new and innovative evidence-based approaches to philanthropy that centers local partner interests, such as impact investing and social entrepreneurship as strategies to mobilize additional resources regionally and globally for addressing health, gender, economic and climate justice issues. This includes investing in mechanisms that seek to leverage opportunities to collaborate with the diaspora to amplify the impact of their collective giving and remittances to the Africa continent.\n
    Systems-Leadership Approach and Institutional strengthening: At CEDIL Global we believe that investing in systems- leadership approach, institutional strengthening and infrastructure support for local partners will accelerate improvement in the effectiveness and sustainability of philanthropic efforts on the African continent including partnering with other funding organizations, Universities and research institutions.\n
    Our Promise\n
    CEDIL Global will continue to promote locally owned Africa development solutions and innovations that accelerate the impact of advancing health, gender, economic and climate justice. This includes running an innovations video series, journal, podcast and annual innovations leadership award event among others.\n
    We will increase access to flexible development funding for health, gender, economic and climate justice through institutional resource mobilization, systems leadership development, fundraising support, and direct grantmaking to local organizations in communities and urban settings including within Africa cities’ suburbs.\n
    We will provide institutional capacity strengthening support, technical assistance and consulting services for institutions on the African continent and run a Global Philanthropic Leadership Academy to foster strategic research, training and learning.\n
    We will continue to foster co-creation of strategic issue-based funding collaboratives, and philanthropic mechanisms that accelerate widespread actions for advancing systemic changes in health, gender, economic and climate justice at regional, and Africa continental levels. This will include continued support for issue-based national, regional and continental convenings and policy engagements. And leveraging regional and global convening opportunities to collaborate with the diaspora community in amplifying the impact of their collective giving and remittances to the Africa continent. According to the Global Knowledge Partnership on Migration and Development 2022 report, African diaspora sent $97 billion in remittances to the African continent compared to only $3billion annual funding by African funders to support development initiatives.\n
    As we move forward, I want to emphasize the importance of collaboratives and innovative philanthropic mechanisms in achieving our mission. By working together with diverse stakeholders and leveraging cutting-edge approaches, we can unlock new opportunities for impact and create lasting positive change on the African continent. In the coming weeks and months, I look forward to engaging with each of you our current and potential partners to discuss our strategic priorities and explore new ways to drive progress together. Thank you for your dedication to CEDIL Global’s mission and our envisioning to being the leading catalyst for creating a world where systemic rights-based development change embraces leadership for gender, health, climate and economic justice for all in Africa.\n
    I am excited to embark on this journey with each of you, and I look forward to working together to drive meaningful changes on the Africa continent through collaborative partnerships. Do contact us directly through ceoandpresident@cedilglobal. org and c.c. info@cedilglobal.org should you have any ideas on how we could collaborate or partner together.\n`,
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
