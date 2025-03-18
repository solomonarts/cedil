import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import TransparentNavbar from "./Components/Navbar/TransparentNavbar";
import ScrollEffect from "./Components/ScrollEffect/ScrollEffect";
import InnovationsSection from "./Components/Sections/InnovationsSection";
import SectionWithPattern from "./Components/Sections/SectionWithPattern";
import { bannerpics } from "./Constants";
import AboutUsSingle from "./Components/Pages/AboutSingle";
import HomePage from "./Components/Pages/HomePage";
import DonationDrawer from "./Components/Drawer/DonationDrawer";
import { useState } from "react";
import Leadership from "./Components/Pages/Leadership";
import NewsPage from "./Components/Pages/NewsPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Router basename="/">
        <TransparentNavbar />
        <DonationDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>
                  {/* <HomePage /> */}

                  <Banner setIsOpen={setIsOpen} />
                  {/* First section with Banner */}
                  {/* <ScrollEffect
                    background={bannerpics["banner3.jpg"]}
                    nextBackground={bannerpics["banner2.jpg"]}
                  >
                 
                  </ScrollEffect> */}

                  {/* Next section using NextUI (Innovations Section) */}
                  {/* <ScrollEffect
          background={bannerpics["banner1.jpg"]}
          nextBackground={bannerpics["banner2.jpg"]}
        >
          <InnovationsSection />
        </ScrollEffect> */}

                  {/* Other sections can be added here with the ScrollEffect */}
                </div>
              </>
            }
          />
          <Route path="/leadership-page" element={<Leadership />} />
          <Route path="/about-us" element={<AboutUsSingle />} />
          <Route path="/news-page" element={<NewsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
