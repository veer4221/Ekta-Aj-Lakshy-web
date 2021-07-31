import React from "react";
import MissionsAndVisionImg from "./MissionsAndVisionImg";
const MissionImg = [
  {
    imgLink: "assets/images/misin.jpg",
  },
];

const VisionImg = [
  {
    imgLink: "assets/images/vision.jpg",
  },
];

const MissionAndVision = () => {
  return (
    <>
      <section className="container-fluid mission-vision page">
        <div className="container">
          <div className="row mission">
            <div className="col-md-6 mv-det">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                neque libero, pulvinar et elementum quis, facilisis eu ante.
                Mauris non placerat sapien. Pellentesque tempor arcu non odio
                scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam varius eros consequat auctor gravida. Fusce
                tristique lacus at urna sollicitudin pulvinar. Suspendisse
                hendrerit ultrices mauris.
              </p>
            </div>
            <MissionsAndVisionImg imgLink={MissionImg[0].imgLink}/>
          </div>
          <div className="row vision">
          <MissionsAndVisionImg imgLink={VisionImg[0].imgLink}/>
            <div className="col-md-6 mv-det">
              <h1>Our Vision</h1>
              <p>
                Ut ultricies lacus a rutrum mollis. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl
                ligula, ullamcorper non metus vitae, maximus efficitur mi.
                Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui.
                Proin massa urna, volutpat vel augue eget, iaculis tristique
                dui.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;
