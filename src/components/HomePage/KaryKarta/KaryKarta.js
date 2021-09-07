import KaryKartaCard from "./KaryKartaCard";
import React from "react";

const karykartaInformation = [
  {
    imageUrl: `assets/images/team/team-memb1.jpg`,
    name: `હિન્દુ ભગીરથ સિંહ રાઠોડ `,
    position: `સંસ્થાપક `,
  },
  {
    imageUrl: `assets/images/team/team-memb5.jpg`,
    name: `હિન્દુ જયભાઈ  પટેલ `,
    position: `ગુજરાત ઉપાધ્યક્ષ `,
  },
  {
    imageUrl: `assets/images/team/team-memb2.jpg`,
    name: `હિન્દુ નીતિનભાઈ પટેલ `,
    position: `ગુજરાત મહામંત્રી`,
  },
  {
    imageUrl: `assets/images/team/team-memb3.jpg`,
    name: `હિન્દુ જ્વાલાસિંહ રાઠોડ `,
    position: `આઇટી સેલ પ્રમુખ `,
  },
  {
    imageUrl: `assets/images/team/team-memb4.jpg`,
    name: `હિન્દુ અશોકસિંહ વાઘેલા`,
    position: `એકલવ્ય સમિતિ `,
  },
  {
    imageUrl: `assets/images/team/team-memb6.png`,
    name: `હિન્દુ સંજયભાઈ ગજ્જર`,
    position: `એકલવ્ય સમિતિ `,
  },
];
const KaryKarta = () => {
  return (
    <>
      <section className="our-team team-11 page">
        <div className="container">
          <div className="session-title row ">
            <h2>Meet our Team</h2>
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
