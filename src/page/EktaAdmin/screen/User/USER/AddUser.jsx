import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUserAPI } from "../../../../../api";
import { convertBase64 } from "../../../../../helper/base64Converter";
import {
  addUserAction,
  cleanAllStateAction,
  cleanCityAction,
  cleanDistrictAction,
  getCityAction,
  getDistrictAction,
  getStateAction,
} from "../../../../../Redux/Actions";
const AddUser = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);
  const navigate = useNavigate();
  const [firstName, setfirstName] = React.useState();
  const [sarname, setsarname] = React.useState();
  const [fatherName, setfatherName] = React.useState();
  const [motherName, setmotherName] = React.useState();
  const [birthDate, setbirthDate] = React.useState();
  const [totalFamilyMembers, settotalFamilyMembers] = React.useState();
  const [husbandName, sethusbandName] = React.useState();
  const [order, setorder] = React.useState();
  const [paymentSignature, setpaymentSignature] = React.useState();
  const [payment, setpayment] = React.useState();
  const [email, setemail] = React.useState();
  const [study, setstudy] = React.useState();
  const [bloodGroup, setbloodGroup] = React.useState();
  const [pinCode, setpinCode] = React.useState();
  const [business, setbusiness] = React.useState();
  const [businessAddress, setbusinessAddress] = React.useState();
  const [userName, setuserName] = React.useState();
  const [marrage, setmarrage] = React.useState();
  const [gender, setgender] = React.useState();
  const [role, setrole] = React.useState();
  const [address, setaddress] = React.useState();
  const [mobileNumber, setmobileNumber] = React.useState();
  const [whatsAppNumber, setwhatsAppNumber] = React.useState();
  const [password, setpassword] = React.useState();
  const [user_state, setuser_state] = React.useState();
  const [user_distict, setuser_distict] = React.useState();
  const [user_city, setuser_city] = React.useState();
  const [image, setimage] = React.useState();
  const [imageProfile, setimageProfile] = React.useState();
  const [userDocImage, setuserDocImage] = React.useState();
  const [iCardImage, setiCardImage] = React.useState();
  const [icard_id, seticard_id] = React.useState();
  const [role_id, setrole_id] = React.useState();
  //   const [image, setImage] =React.useState();
  const [docImage, setDocImage] = React.useState();
  const [resume, setresume] = React.useState();
  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setimage(base64);
  };
  const uploadDocImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setDocImage(base64);
  };
  const uploadIcardImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setiCardImage(base64);
  };
  useEffect(() => {
    dispatch(cleanAllStateAction());
  }, []);
  useEffect(async () => {
    await dispatch(getStateAction());
  }, []);
  useEffect(() => {
    // alert(company_state);
    if (user_state != -1) {
      dispatch(getDistrictAction(user_state));
    }
  }, [user_state]);
  useEffect(() => {
    // alert(company_distict);
    if (user_distict != -1) {
      dispatch(getCityAction(user_distict));
    }
  }, [user_distict]);
  const onSubmitFunc = async () => {
    const userDataObj = {
      firstName,
      sarname,
      fatherName,
      motherName,
      birthDate,
      totalFamilyMembers,
      husbandName,
      order,
      paymentSignature,
      payment,
      email,
      study,
      bloodGroup,
      pinCode,
      business,
      businessAddress,
      userName,
      marrage,
      gender,

      address,
      mobileNumber,
      whatsAppNumber,
      password,
      payment,
      user_state,
      user_distict,
      user_city,
      image,
      imageProfile,
      docImage,
      icard_id,
      iCardImage,
      role_id,
      resume,
    };
    if (role == "veer4221") userDataObj.role = "SUPERADMIN";
    // console.log(userDataObj);
    const res = await addUserAPI(userDataObj);
    if (res.status === 200 && res.data.success == true)
      return navigate(`/ektaAdmin/UserList`);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">Add New User</div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>firstName</lable>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>sarname</lable>
          <input
            type="text"
            className="form-control"
            value={sarname}
            onChange={(e) => setsarname(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>fatherName</lable>
          <input
            type="text"
            className="form-control"
            value={fatherName}
            onChange={(e) => setfatherName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>motherName</lable>
          <input
            type="text"
            className="form-control"
            value={motherName}
            onChange={(e) => setmotherName(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>birthDate</lable>
          <DatePicker
            className="form-control"
            selected={birthDate}
            onChange={(date) => setbirthDate(date)}
          />
          {/* <input
            type="text"
            className="form-control"
            value={birthDate}
            onChange={(e) => setbirthDate(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>totalFamilyMembers</lable>
          <input
            type="number"
            className="form-control"
            value={totalFamilyMembers}
            onChange={(e) => settotalFamilyMembers(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>husbandName</lable>
          <input
            type="text"
            className="form-control"
            value={husbandName}
            onChange={(e) => sethusbandName(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>payment</lable>
          <select
            name="cars"
            className="form-control"
            // style={{ background: "#222020", color: "white" }}
            id="cars"
            value={payment}
            onChange={(e) => {
              setpayment(e.target.value);
            }}
            class="form-control"
          >
            <option value="0">None</option>
            <option value="1">Done</option>
            <option value="0">Panding</option>
          </select>
          {/* <input
            type="text"
            className="form-control"
            value={payment}
            onChange={(e) => setpayment(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>email</lable>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>study</lable>
          <input
            type="text"
            className="form-control"
            value={study}
            onChange={(e) => setstudy(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>bloodGroup</lable>
          <select
            name="cars"
            className="form-control"
            // style={{ background: "#222020", color: "white" }}
            id="cars"
            value={bloodGroup}
            onChange={(e) => {
              setbloodGroup(e.target.value);
            }}
            class="form-control"
          >
            <option value="None">None</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>pinCode</lable>
          <input
            type="text"
            className="form-control"
            value={pinCode}
            onChange={(e) => setpinCode(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>business</lable>
          <input
            type="text"
            className="form-control"
            value={business}
            onChange={(e) => setbusiness(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>businessAddress</lable>
          <input
            type="text"
            className="form-control"
            value={businessAddress}
            onChange={(e) => setbusinessAddress(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>userName</lable>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>marrage</lable>
          <select
            name="cars"
            className="form-control"
            // style={{ background: "#222020", color: "white" }}
            id="cars"
            value={marrage}
            onChange={(e) => {
              setmarrage(e.target.value);
            }}
            class="form-control"
          >
            <option value="None">None</option>
            <option value="1">Yes</option>
            <option value="0">NO</option>
          </select>

          {/* <input
            type="text"
            className="form-control"
            value={marrage}
            onChange={(e) => setmarrage(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>gender</lable>
          <select
            name="cars"
            className="form-control"
            // style={{ background: "#222020", color: "white" }}
            id="cars"
            value={marrage}
            onChange={(e) => {
              setmarrage(e.target.value);
            }}
            class="form-control"
          >
            <option value="None">None</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* <input
            type="text"
            className="form-control"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>role</lable>
          <input
            type="text"
            className="form-control"
            value={role}
            onChange={(e) => setrole(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>address</lable>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>mobileNumber</lable>
          <input
            type="text"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setmobileNumber(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>whatsAppNumber</lable>
          <input
            type="text"
            className="form-control"
            value={whatsAppNumber}
            onChange={(e) => setwhatsAppNumber(e.target.value)}
          />
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>password</lable>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>user_state</lable>
          <select
            style={{ background: "#e4ebea" }}
            name="user_state"
            as="select"
            className="formBg"
            id="user_state"
            value={user_state}
            onChange={(e) => {
              setuser_city(-1);
              setuser_distict(-1);
              dispatch(cleanCityAction());
              dispatch(cleanDistrictAction());

              setuser_state(e.target.value);
              //   values.user_state = e.target.value;
            }}
            class="form-control "
          >
            <option value={-1}>please Select</option>

            {place.state.rows &&
              place.state.rows.map((data) => (
                <>
                  <option value={`${data.state_id}`}>{data.state_title}</option>
                </>
              ))}
          </select>
          {/* <input
            type="text"
            className="form-control"
            value={user_state}
            onChange={(e) => setuser_state(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>user_distict</lable>
          <select
            style={{ background: "#e4ebea" }}
            name="user_distict"
            as="select"
            className="formBg"
            id="user_distict"
            value={user_distict}
            // value={company_distict}
            onChange={(e) => {
              dispatch(cleanCityAction());
              setuser_city(-1);
              setuser_distict(e.target.value);
              //   values.user_distict = e.target.value;
            }}
            class="form-control"
          >
            <option value={-1}>please select</option>

            {place.district.rows &&
              place.district.rows.map((data) => (
                <>
                  <option value={`${data.districtid}`}>
                    {data.district_title}
                  </option>
                </>
              ))}
          </select>
          {/* <input
            type="text"
            className="form-control"
            value={user_distict}
            onChange={(e) => setuser_distict(e.target.value)}
          /> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>user_city</lable>
          <select
            style={{ background: "#e4ebea" }}
            name="user_city"
            className="formBg"
            as="select"
            id="user_city"
            value={user_city}
            onChange={(e) => {
              setuser_city(e.target.value);
              // values.user_city = e.target.value;
            }}
            class="form-control "
          >
            <option value={-1}>please Select</option>

            {place.city.rows &&
              place.city.rows.map((data) => (
                <>
                  <option value={`${data.id}`}>{data.name}</option>
                </>
              ))}
          </select>
          {/* <input
            type="text"
            className="form-control"
            value={user_city}
            onChange={(e) => setuser_city(e.target.value)}
          /> */}
        </div>
        {/* <div className="col-md-4 col-sm-12">
          <lable>image</lable>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div> */}
        <div className="col-md-4 col-sm-12">
          <lable>imageProfile</lable>

          <input
            onChange={(e) => {
              //   setFieldValue("image", e.target.files[0]);
              uploadImage(e);
            }}
            type="file"
            className="custom-file-input pt-5"
            id="customFile"
          />
          <label class="custom-file-label mt-4" for="customFile">
            Select imageProfile
          </label>
          {/* <input
            type="text"
            className="form-control"
            value={imageProfile}
            onChange={(e) => setimageProfile(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <label> Profile Document:</label>
          <div class="custom-file">
            <input
              onChange={(e) => uploadDocImage(e)}
              type="file"
              class="custom-file-input"
              id="customFile"
            />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Button onClick={onSubmitFunc} className="btn btn-primary">
            Create
          </Button>
          {/* <input
            type="text"
            className="form-control"
            value={iCardImage}
            onChange={(e) => setiCardImage(e.target.value)}
          /> */}
        </div>
        {/* <div className="col-md-4 col-sm-12">
          <lable>icard_id</lable>
          <input
            type="text"
            className="form-control"
            value={icard_id}
            onChange={(e) => seticard_id(e.target.value)}
          />
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img src={image} height="150" width="250" />
        </div>
        <div className="col-md-4 col-sm-12">
          <img src={docImage} height="150" width="250" />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
