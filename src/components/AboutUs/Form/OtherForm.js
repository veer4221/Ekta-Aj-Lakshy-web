import React, { useState } from "react";
import {
  stateUpdateAction,
  updateUserAction,
} from "../../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

const OtherForm = ({ setPage }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [fatherName, setFatherName] = useState();
  const [motherName, setMotherName] = useState();
  const [husbandName, setHusbandName] = useState();
  const [address, setAddress] = useState();
  const [totalFamilyMembers, setTotalFamilyMembers] = useState();
  const [business, setBusiness] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [pinCode, setPinCode] = useState();

  const updateUserFunc = (e) => {
    e.preventDefault();
    const userObj = {
      fatherName,
      motherName,
      husbandName,
      address,
      totalFamilyMembers,
      business,
      businessAddress,
      pinCode,
    };
    console.log(userObj);
    dispatch(stateUpdateAction(userObj));

    console.log(user.getUserInfo);
    setPage(`4`);
  };
  return (
    <>
      <div className="form-row ">
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Father Name
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            values={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Mother Name
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputPassword4">
            husband name
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={husbandName}
            onChange={(e) => setHusbandName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row ">
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Family Mumber
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={totalFamilyMembers}
            onChange={(e) => setTotalFamilyMembers(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4"></div>
      </div>
      <div className="form-row ">
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Business
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputEmail4">
            Business Address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label style={{ color: "rgb(172, 24, 24)" }} for="inputPassword4">
            Pincode
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn"
        onClick={() => {
          setPage(`2`);
        }}
      >
        || back ||
      </button>
      <button type="submit" className="btn" onClick={updateUserFunc}>
        || next ||
      </button>
    </>
  );
};

export default OtherForm;
