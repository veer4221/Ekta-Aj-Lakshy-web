import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { emailCheckAction } from "../../../Redux/Actions/index";
const EmailForm = ({ setPage }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const emailcheckFunc = () => {
    dispatch(emailCheckAction({ email }));
    setPage(`2`);
  };
  return (
    <div className="form-row ourBtn">
      <div className="form-group col-md-4 ourBtn">
        <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br></br>
      <button type="submit" className="btn ourBtn" onClick={emailcheckFunc}>
        || Next ||
      </button>
    </div>
  );
};

export default EmailForm;
