import React from "react";
import KaryKartaCard from "./KaryKartaCard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const karykartaInformation = [
  {
    icon: FacebookIcon,
    name: `ફેસબુક  `,
    color: `#3b5998`,
    idName: `એકતાએજલક્ષ્યસંગઠન`,
    url: `https://www.facebook.com/profile.php?id=100053218577559`,
  },
  {
    icon: TwitterIcon,
    name: `ટ્વીટર `,
    color: `#5da9dd `,
    idName: `EKTA_ej_laksh`,
    url: `https://twitter.com/ekta_ej_laksh`,
  },
  {
    icon: InstagramIcon,
    name: `ઈન્સ્ટાગ્રામ  `,
    color: `#e95b66`,
    idName: `ekta_ej_laksh_official`,
    url: `https://www.instagram.com/ekta_ej_laksh_official/`,
  },
  {
    icon: WhatsAppIcon,
    name: `વોટ્સએપ `,
    color: `#1ad03f`,
    idName: `૬૩૫૯૯૯૦૦૦૮`,
    url: `https://wa.me/916359990008`,
  },
];
const ContectUsMain = () => {
  return (
    <>
      <section className="our-team team-11 page">
        <div className="container">
          <div className="session-title row ">
            <h2>Contect US</h2>
            <br></br>
            <br></br>
            <h3 style={{ color: "rgb(172, 24, 24)", textAlign: "center" }}>
              એકતા એજ લક્ષ્ય સંગઠન<br></br> અઢારેવરણ એક સાથે હિન્દુત્વમાટે
            </h3>
          </div>
          <div
            className="row team-row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {karykartaInformation.map((data) => (
              <KaryKartaCard data={data} />
            ))}
          </div>
          <div className="row">
            <div class="col-md-6">
              <br></br>
              <h4>
                <b>સંગઠન અંગે માહિતી</b>
              </h4>
              <p style={{ color: "rgb(172, 24, 24)" }}>
                <b> રજીસ્ટ્રેશનનંબરએફ.૮૭૯/ગુજ.૮૩૧/મોરબી.</b>
              </p>
              {/* <img src="assets/images/logo.png" alt="" height="90px" /> */}
            </div>
            <div class="col-md-6">
              <h4>
                <br></br>

                <b>કાર્યાલય સરનામું </b>
              </h4>
              <p style={{ color: "rgb(172, 24, 24)" }}>
                ૫૦૯ ,૫માંમાળે, પ્રેસિડેન્ટબિલ્ડીંગ,<br></br>
                વિજય પેટ્રોલપંપ બાજુમાં,<br></br>
                સેક્ટર૧૧, ગાંધીનગર , ૩૮૨૦૧૧ <br></br> ઓફિસસંપર્ક:-૬૩૫૯૯૯૦૦૦૮
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContectUsMain;
