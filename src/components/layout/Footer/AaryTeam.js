import React from "react";

import KaryKartaCard from "./AaryTeamCard";

const karykartaInformation = [
  {
    imageUrl: `assets/images/AaryTeam/veer.png`,
    name: `Veer ManishBhai Patel `,
    frontend: [`ReactJs`],
    backend: [`NodeJs`, `Django`],
    mobileNumber: `+91 9723479653`,
    email: `patelveer4221@gmail.com`,
    instagram: "https://www.instagram.com/mr_error4221/",
    facebook: "https://www.facebook.com/patel.veer.7146",
    whatsapp: "https://wa.me/919723479653",
    linkedin: "https://www.linkedin.com/in/patel-vinaykumar/",
  },
  // {
  //   imageUrl: `assets/images/AaryTeam/deep.png`,
  //   name: `Dip RakeshBhai Patel `,
  //   frontend: [`Angular`],
  //   backend: [`NodeJs`],
  //   mobileNumber: `+91 7990229397`,
  //   email: `sdfsd@sdfg`,
  //   instagram: "https://www.instagram.com/d.e._.e.p/",
  //   facebook: "https://www.facebook.com/profile.php?id=100011447708355",
  //   whatsapp: "https://wa.me/917990229397",
  //   linkedin: "",
  // },
  // {
  //   imageUrl: `assets/images/AaryTeam/ritesh.png`,
  //   name: `Ritesh ChimanBhai Patel`,
  //   frontend: [`Angular`],
  //   backend: [`NodeJs`],
  //   mobileNumber: `+91 9574008285`,
  //   email: `dfgdfg@dfgdfg`,
  //   instagram: "https://www.instagram.com/ritesh_patel_2110/",
  //   facebook: "https://www.facebook.com/profile.php?id=100039475484029",
  //   whatsapp: "https://wa.me/919574008285",
  //   linkedin: "",
  // },
  {
    imageUrl: `assets/images/AaryTeam/dhruv.png`,
    name: `Dhruv Patel`,
    frontend: [`Angular`],
    backend: [`SpringBoot`],
    mobileNumber: `+91 8141401087`,
    email: `dfgdf@@dfgdfg`,
    instagram: "https://www.instagram.com/_dhruv_8141/",
    facebook: "https://www.facebook.com/profile.php?id=100010575913769",
    whatsapp: "https://wa.me/918141401087",
    linkedin: "",
  },
  // {
  //   imageUrl: `assets/images/AaryTeam/dipen.png`,
  //   name: `Dipen Patel`,
  //   frontend: [`Angular`],
  //   backend: [`C#`],
  //   mobileNumber: `+91 8141401087`,
  //   email: `dfgdf@@dfgdfg`,
  //   instagram: "https://www.instagram.com/_dhruv_8141/",
  //   facebook: "https://www.facebook.com/profile.php?id=100010575913769",
  //   whatsapp: "https://wa.me/918141401087",
  //   linkedin: "",
  // },
];
const AaryTeam = () => {
  return (
    <>
      <section className="our-team team-11 page">
        <div className="container">
          <div className=" row ">
            <div className="col-md-6">
              <img
                src="assets/images/AaryTeam/Aarylogo.png"
                alt="logo"
                width="50%"
                height="90%"
              />
            </div>
            <div className="col-md-6">
              <h3>Our Developers Team</h3>
            </div>
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

export default AaryTeam;
