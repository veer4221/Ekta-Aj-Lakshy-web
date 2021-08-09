// import './App.css';
import HomePage from "./page/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./page/HomePage";
import News from "./page/News";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Gallery from "./page/Gallery";
import "./style/aboutUsMtextView.css";
import "./style/buttoncss.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import FloatingMenu2 from "./components/layout/FloatingBTN/FloatingMenu2";
import "./style/buttoncss.css";
import AboutUsSangathan from "./components/HomePage/AboutUsSangathan/AboutUsSangathan";
import DoneteUs from "./page/DoneteUs";

const App = (props) => {
  return (
    <div className="App">
      <MobileView>
        <FloatingMenu2 />
      </MobileView>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/AboutUs" element={<AboutUsSangathan />} />
        <Route path="/News" element={<News />} />
        <Route path="/DonateUs" element={<DoneteUs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
