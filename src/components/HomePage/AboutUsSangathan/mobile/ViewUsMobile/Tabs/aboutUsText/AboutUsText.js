import React from "react";
import { Card } from "@material-ui/core";
import AboutUsBox from "./AboutUsSangathanSubComponunt/AboutUsBox";
import AboutUsContent from "./AboutUsSangathanSubComponunt/AboutUsContent";
import "../../../../../../../style/aboutUsMtextView.css"
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
            <AboutUsContent />
            <div className="image-part col-md-12 ">
              <div className="about-quick-box row">
                {boxData.map((data) => (
                  <AboutUsBox icon={data.icon} titel={data.titel} />
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
