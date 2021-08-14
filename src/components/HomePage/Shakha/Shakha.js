import React from "react";
import ShakhaCard from "./ShakhaCard";
import "./shakha.css";
const shakhaCardInfo = [
  {
    name: "મુખ્ય શાખા",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_03.jpg",
  },
  {
    name: "આઇટી સેલ ",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_02.jpg",
  },
  {
    name: "રોજગાર શાખા",
    information: ` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's`,
    imgLink: "assets/images/events/image_01.jpg",
  },
];

const Shakha = () => {
  return (
    <>
      <section className="events page">
        <div className="container ">
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
