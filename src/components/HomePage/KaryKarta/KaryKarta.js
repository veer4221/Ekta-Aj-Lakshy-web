import React from "react";
import KaryKartaCard from "./KaryKartaCard";
const karykartaInformation = [
  {
    imageUrl: `assets/images/team/team-memb1.jpg`,
    name: `શ્રી ભગીરથ સિંહ રાઠોડ `,
    position: `સંસ્થાપક `,
  },
  {
    imageUrl: `assets/images/team/team-memb2.jpg`,
    name: `શ્રી નીતિનભાઈ પટેલ `,
    position: `ઉપ સંસ્થાપક`,
  },
  {
    imageUrl: `assets/images/team/team-memb3.jpg`,
    name: `શ્રી જ્વાલાસિંહ રાઠોડ `,
    position: `આઇટી સેલ પ્રમુખ `,
  },
  {
    imageUrl: `assets/images/team/team-memb4.jpg`,
    name: `શ્રી અશોકસિંહ વાઘેલા`,
    position: `મુખ્ય કાર્યકર્તા `,
  },
  {
    imageUrl: `assets/images/team/team-memb4.jpg`,
    name: `શ્રી અશોકસિંહ વાઘેલા`,
    position: `મુખ્ય કાર્યકર્તા `,
  },
  {
    imageUrl: `assets/images/team/team-memb4.jpg`,
    name: `શ્રી અશોકસિંહ વાઘેલા`,
    position: `મુખ્ય કાર્યકર્તા `,
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
          <div
            className="row team-row"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
