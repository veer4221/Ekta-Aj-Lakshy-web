import "./loginScreen.scss";

import React from "react";
import image from "./mainLogo.png";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="login bg-chalchitram">
      <div className="login__container">
        <h3 style={{ textAlign: "center", color: "white" }}>
          એકતા એજ લક્ષ્ય <br />
          તમારું चलच्चित्रम् માં સ્વાગત છે{" "}
        </h3>
        <img src={image} alt="" />
        <button
          className="brn btn-primary"
          onClick={() => navigate(`/ChalChitram/NewVideo`)}
        >
          મુખ્ય પેજ{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
