import "./loginScreen.scss";

import React from "react";
import image from "./imageLogo.png";
import { useNavigate } from "react-router";

const AbhyasScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="login bg-chalchitram">
      <div className="login__container">
        <h3 style={{ textAlign: "center", color: "white" }}>
          એકતા એજ લક્ષ્ય <br />
          તમારું સનાતન શિક્ષા  માં સ્વાગત કરે છે
        </h3>
        <img src={image} alt="" />
        <button
          className="brn btn-primary"
          onClick={() => navigate(`/ChalChitram/CourseList`)}
        >
          અભ્યાસ કરો 
        </button>
      </div>
    </div>
  );
};

export default AbhyasScreen;
