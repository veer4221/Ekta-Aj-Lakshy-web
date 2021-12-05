import React from "react";

import KaryKartaCard from "./KaryKartaCard";

const karykartaInformation = [
  {
    imageUrl: `assets/images/team/team-memb1.jpg`,
    name: `હિન્દુ ભગીરથ સિંહ રાઠોડ `,
    position: ` એકતા એજ લક્ષ્ય સંગઠન સંસ્થાપક`,
  },
  {
    imageUrl: `assets/images/team/team-memb6.jpg`,
    name: `હિન્દુ જયભાઈ  પટેલ `,
    position: `ગુજરાત ઉપાધ્યક્ષ `,
  },
  {
    imageUrl: `assets/images/team/team-memb2.jpg`,
    name: `હિન્દુ નીતિનભાઈ પટેલ `,
    position: `રોજગાર શાખા પ્રમુખ ગુજરાત પ્રદેશ`,
  },
  {
    imageUrl: `assets/images/team/team-memb3.jpg`,
    name: `હિન્દુ જ્વાલાસિંહ રાઠોડ `,
    position: `આઈ ટી સેલ શાખા ગુજરાત પ્રદેશ પ્રમુખ `,
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

          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2
                  style={{
                    color: "brown",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  સમિતિઓ
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-6"
                style={{ color: "brown", textAlign: "center" }}
              >
                <h4>એકલવ્ય સમિતિ</h4>
              </div>
              <div
                className="col-6"
                style={{ color: "brown", textAlign: "center" }}
              >
                <h4>સમર્પણ સમિતિ</h4>
              </div>
              <div
                className="col-6"
                style={{ color: "brown", textAlign: "center" }}
              >
                <h4>ગુપ્ત સમિતિ</h4>
              </div>
              <div
                className="col-6"
                style={{ color: "brown", textAlign: "center" }}
              >
                <h4>કામધેનુ સમિતિ</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KaryKarta;
