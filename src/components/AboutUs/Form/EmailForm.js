import React, { useState } from "react";
import {
  checkUserPreasentOrNotAction,
  emailCheckAction
} from "../../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "react-bootstrap";
import Portal from "@material-ui/core/Portal";

const EmailForm = ({ setPage }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [name, setName] = useState("");
  const onSubmitFunc = async (e) => {
    console.log("test onsubmit");
    e.preventDefault();

    alert("ok");

    dispatch(checkUserPreasentOrNotAction({ email }));
    if (user.message == "user is exist") {
      alert("user is exist ");
      return;
    }
    setPage(`2`);
  };
  const xyz = (e) => {
    e.preventDefault();
    alert("ok");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    // <Portal container={portalRef.current}>

    // </Portal>
    <Form onSubmit={onSubmitFunc}>
      <div className="form-row ourBtn">
        <div className="form-group col-md-4 ourBtn">
          <label style={{ color: "rgb(172, 24, 24)" }}>Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <input type="submit" value="submit" />
    </Form>
    // <form onSubmit={xyz}>
    //   <button type="submit">submit</button>
    //    </form>
  );
};

export default EmailForm;
