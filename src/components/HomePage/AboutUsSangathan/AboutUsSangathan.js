import React from "react";
import AboutUsBox from "./AboutUsSangathanSubComponunt/AboutUsBox";
import AboutUsContent from "./AboutUsSangathanSubComponunt/AboutUsContent";
import AboutSangathanMobile from "./mobile/AboutSangathanMobile";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Card } from "@material-ui/core";
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
        <Card>

        <div className="about-us container-fluid ">
          <div className="bgimg">
            <div className="container">
              <AboutSangathanMobile />
            </div>
          </div>
        </div>
        </Card>
      </MobileView>
      <BrowserView>
        <div className="about-us container-fluid ">
          <div className="bgimg">
            <div className="container">
              <div className="row natur-row no-margin w-100 maindiv">
                <AboutUsContent />
                <div className="image-part col-md-6">
                  <div className="about-quick-box row">
                    {boxData.map((data) => (
                      <AboutUsBox icon={data.icon} titel={data.titel} />
                    ))}
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
