import React, { lazy, Suspense } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Grid } from "@material-ui/core";
import "../../../style/aboutUs.css";
import "../../../style/aboutUsMtextView.css";
const AboutUsContent = lazy(() =>
  import("./Web/AboutUsSangathanSubComponunt/AboutUsContent")
);
const AboutSangathanMobile = lazy(() =>
  import("./mobile/AboutSangathanMobile")
);
const AboutUsBox = lazy(() =>
  import("./Web/AboutUsSangathanSubComponunt/AboutUsBox")
);
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
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutSangathanMobile />
                </Suspense>
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
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutUsContent />
                </Suspense>
                {/* <AboutSangathanMobile /> */}
                <div className="image-part col-md-6">
                  <div className="about-quick-box row">
                    <Suspense fallback={<div>Loading...</div>}>
                      <AboutUsBox />
                    </Suspense>
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
