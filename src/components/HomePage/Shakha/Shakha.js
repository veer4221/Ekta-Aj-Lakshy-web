import React from "react";
import ShakhaCard from "./ShakhaCard";
const shakhaCardInfo = [
  {
    name: "Rojgar",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_06.jpg",
  },
  {
    name: "Gaurakshak",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_08.jpg",
  },
  {
    name: "Sahity",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_04.jpg",
  },
];

const Shakha = () => {
  return (
    <>
      <section className="events">
        <div className="container">
          <div className="session-title row">
            <h2>Our Branch</h2>
            <p>
              We are a non-profital & Charity raising money for child education
            </p>
          </div>
          <div className="event-ro row">
            {shakhaCardInfo &&
              shakhaCardInfo.map((data) => <ShakhaCard data={data} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shakha;
