import React, { lazy, Suspense } from "react";
import { Card } from "@material-ui/core";
import "../../../../../../../style/aboutUsMtextView.css";
const AboutUsContent = lazy(() =>
  import("./AboutUsSangathanSubComponunt/AboutUsContent")
);
const AboutUsBox = lazy(() =>
  import("./AboutUsSangathanSubComponunt/AboutUsBox")
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
const AboutUsText = () => {
  return (
    <>
      <div className="about-us container-fluid page ">
        <div className="container-fluid">
          <div className="row natur-row no-margin w-100 maindiv ">
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUsContent />
            </Suspense>
            <div className="image-part col-md-12 ">
              <div className="about-quick-box row">
                {boxData.map((data) => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <AboutUsBox icon={data.icon} titel={data.titel} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsText;
