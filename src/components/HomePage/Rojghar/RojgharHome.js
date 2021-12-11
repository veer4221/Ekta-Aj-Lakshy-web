import React from "react";

import { useNavigate } from "react-router";

const RojgharHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="container-fluid page">
        <div class="row">
          <div
            class="col-12 "
            style={{ textAlign: "center", color: "rgb(172, 24, 24)" }}
          >
            <h1 style={{ color: "rgb(172, 24, 24)", padding: "10px" }}>
              રોજગાર શાખા
            </h1>
          </div>
          <div
            class="col-sm bgIMG"
            style={{ textAlign: "center", padding: "70px 0" }}
          >
            <div class="container">
              <div
                class="col-12"
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <h4
                  style={{ textAlign: "center" }}
                  style={{ color: "rgb(172, 24, 24)", padding: "10px" }}
                >
                  || ઉપલબ્ધ વ્યવસાય ||
                </h4>
                {/* <hr style={{ background: "red" }} /> */}
              </div>

              <div
                class="col-12 "
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <p
                  style={{ textAlign: "center" }}
                  style={{ color: "rgb(172, 24, 24)", padding: "10px" }}
                >
                  તમારા વિસ્તાર માં આપણા <br /> હિંદુ ભાઈઓ ના આવેલ વ્યવસાયો{" "}
                </p>
              </div>
              <div
                class="col-12 ourBtn "
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <button
                  onClick={() => {
                    navigate("/Rojgharmain/Business");
                  }}
                >
                  {" "}
                  || વ્યાવસાય જુઓ ||
                </button>
              </div>
            </div>
          </div>

          <div class="col-sm bgIMG">
            <div class="container">
              <div
                class="col-12"
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <h4
                  style={{ textAlign: "center" }}
                  style={{ color: "rgb(172, 24, 24)", padding: "10px" }}
                >
                  ||ઉપલબ્ધ નોકરીઓ||
                </h4>
                {/* <hr style={{ background: "red" }} /> */}
              </div>

              <div
                class="col-12 "
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <h4
                  style={{ textAlign: "center" }}
                  style={{
                    color: "rgb(172, 24, 24)",
                    padding: "10px",
                    fontFamily: "vardana",
                  }}
                >
                  130
                </h4>
              </div>
              <div
                class="col-12 ourBtn "
                style={{
                  textAlign: "center",
                  color: "color: rgb(172, 24, 24)",
                }}
              >
                <button onClick={() => navigate("/Rojgharmain/FindJob")}>
                  || નોકરી શોધો ||
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RojgharHome;
