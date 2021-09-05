import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const AaryTeamCard = ({ data }) => {
  return (
    <>
      <div className="col-md-3 col-sm-6">
        <div
          className="single-usr"
          style={{
            boxShadow: "rgb(0 0 0 / 35%) 0px 8px 20px 7px",
            borderRadius: "10px 10px ",
            border: "1.9px solid gray",
            backgroundColor: "white",

            padding: "10px",
          }}
        >
          <LazyLoadImage effect="blur" src={data.imageUrl} alt="" />
          <hr
            style={{
              color: "rgb(172, 24, 24)",
            }}
          ></hr>

          <div className="">
            <table width="100%">
              <tr>
                <td>
                  <b>Name</b>
                </td>
                <td style={{ color: "rgb(172, 24, 24)" }}>:{data.name}</td>
              </tr>
              <tr>
                <td>
                  <b>Email</b>
                </td>
                <td style={{ color: "rgb(172, 24, 24)" }}>:{data.email}</td>
              </tr>
              <tr>
                <td>
                  <b>Mobile</b>
                </td>
                <td style={{ color: "rgb(172, 24, 24)" }}>
                  : {data.mobileNumber}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Frontend</b>
                </td>
                <td>
                  <table>
                    <tr>
                      :
                      {data.frontend &&
                        data.frontend.map((list) => {
                          return (
                            <>
                              <td style={{ color: "rgb(172, 24, 24)" }}>
                                {list},&nbsp;
                              </td>
                            </>
                          );
                        })}
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Backend</b>
                </td>
                <td>
                  <table>
                    <tr>
                      :
                      {data.backend &&
                        data.backend.map((list) => {
                          return (
                            <>
                              <td style={{ color: "rgb(172, 24, 24)" }}>
                                {list},&nbsp;
                              </td>
                            </>
                          );
                        })}
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <hr
              style={{
                color: "rgb(172, 24, 24)",
              }}
            ></hr>
            <table width="100%" style={{ textAlign: "center" }}>
              <tr>
                <td>
                  <a
                    href={data.instagram}
                    style={{ color: `#e95b66` }}
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                </td>
                <td>
                  <a
                    href={data.facebook}
                    style={{ color: `#3b5998` }}
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </td>
                <td>
                  <a
                    href={data.linkedin}
                    style={{ color: `#0a66c2` }}
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </td>
                <td>
                  <a
                    href={data.whatsapp}
                    style={{ color: `#1ad03f` }}
                    target="_blank"
                  >
                    <WhatsAppIcon />
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AaryTeamCard;
