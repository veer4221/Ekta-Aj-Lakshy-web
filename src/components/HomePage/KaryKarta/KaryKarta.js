import React from "react";
import KaryKartaCard from "./KaryKartaCard";
const karykartaInformation = [
  {
    imageUrl: `assets/images/team/team-memb1.jpg`,
    name: `Raj`,
    position: `ceo`,
  },
  {
    imageUrl: `assets/images/team/team-memb2.jpg`,
    name: `Rutvik`,
    position: `xyz`,
  },
  {
    imageUrl: `assets/images/team/team-memb3.jpg`,
    name: `Kirtan`,
    position: `test`,
  },
  {
    imageUrl: `assets/images/team/team-memb4.jpg`,
    name: `krish`,
    position: `demo`,
  },
];
const KaryKarta = () => {
  return (
    <>
      <section className="our-team team-11 page">
        <div className="container">
          <div className="session-title row ">
            <h2>Meet our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
              velit
            </p>
          </div>
          <div className="row team-row">
            {karykartaInformation.map((data) => (
              <KaryKartaCard data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KaryKarta;
