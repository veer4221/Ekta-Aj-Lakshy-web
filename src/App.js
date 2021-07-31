// import './App.css';
import HomePage from "./page/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./page/HomePage";

import { Routes, Route } from "react-router";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Gallery from "./page/Gallery";
import "./style/aboutUsMtextView.css"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import FloatingMenu2 from "./components/layout/FloatingBTN/FloatingMenu2";


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

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
