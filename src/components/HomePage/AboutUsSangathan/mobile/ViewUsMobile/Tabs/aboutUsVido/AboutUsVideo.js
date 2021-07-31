import React from "react";
import ReactPlayer from "react-player";
import "../../../../../../../style/aboutUsMtextView.css"

const AboutUsVideo = () => {
  return (
    <>
      <div className="about-us container-fluid page">
        <div className="container-fluid">
          {/* <div className="row natur-row no-margin w-100 maindiv"> */}
            {/* <div className="image-part col-md-12"> */}
             <div className="about-quick-box row">
                <ReactPlayer url="https://www.youtube.com/watch?v=dyIh97x-eUA" controls={true} playing={true} />
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutUsVideo;
