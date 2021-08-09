import React from "react";
import AboutUsBox from "./Web/AboutUsSangathanSubComponunt/AboutUsBox";
import AboutUsContent from "./Web/AboutUsSangathanSubComponunt/AboutUsContent";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Grid } from "@material-ui/core";
import AboutSangathanMobile from "./mobile/AboutSangathanMobile";
import "../../../style/aboutUs.css";
import "../../../style/aboutUsMtextView.css";
const boxData = [
  {
    icon: `fas fa-user`,
    titel: `Becom a Volunteer`,
  },
  {
    icon: `fas fa-search-dollar red`,
    titel: `Quick Fundrais`,
  },
  {
    icon: `fas fa-donate yell`,
    titel: `Giv Donation`,
  },
  {
    icon: `fas fa-hands-helping blu`,
    titel: `Help Someone`,
  },
];
const AboutUsSangathan = () => {
  return (
    <>
      <MobileView>
        <div className="oldPage page">
          {/* <Card> */}

          <div className="about-us container-fluid page ">
            <div className="bgimgM">
              <div className="container">
                <AboutSangathanMobile />
              </div>
            </div>
          </div>
          {/* </Card> */}
        </div>
      </MobileView>
      <BrowserView>
        <div className="about-us container-fluid page">
          <div className="bgimg bgimg ">
            <div className="container">
              <div className="row natur-row no-margin w-100 maindiv">
                <AboutUsContent />
                {/* <AboutSangathanMobile /> */}
                <div className="image-part col-md-6">
                  <div className="about-quick-box row">
                    <AboutUsBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
};

export default AboutUsSangathan;
