import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addbusinessAPI, addUserAPI } from "../../../../../api";
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
const AddRojgarInfo = () => {
  const dispatch = useDispatch();
  const {id}=useParams();
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
  const [mobileNumber, setmobileNumber] = React.useState();
  const [whatsAppNumber, setwhatsAppNumber] = React.useState();
  const [password, setpassword] = React.useState();
  const [business_state, setbusiness_state] = React.useState();
  const [business_distict, setbusiness_distict] = React.useState();
  const [business_city, setbusiness_city] = React.useState();
  const [imageProfile, setimageProfile] = React.useState();
  const [userDocImage, setuserDocImage] = React.useState();
  const [iCardImage, setiCardImage] = React.useState();
  const [icard_id, seticard_id] = React.useState();
  const [role_id, setrole_id] = React.useState();
  //   const [image, setImage] =React.useState();
  const [docImage, setDocImage] = React.useState();
  const [resume, setresume] = React.useState();

  const [business_title, setbusiness_title] = React.useState();
  const [business_email, setbusiness_email] = React.useState();
  const [business_Name, setbusiness_Name] = React.useState();
  const [business_category, setbusiness_category] = React.useState();
  const [business_Taluka, setbusiness_Taluka] = React.useState();
  const [working_days, setworking_days] = React.useState();
  const [start_Time, setstart_Time] = React.useState();
  const [end_Time, setend_Time] = React.useState();
  const [address, setaddress] = React.useState();
  const [business_description, setbusiness_description] = React.useState();
  const [business_contect_number, setbusiness_contect_number] =
    React.useState();
  const [image, setimage] = React.useState();

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
    if (business_state != -1) {
      dispatch(getDistrictAction(business_state));
    }
  }, [business_state]);
  useEffect(() => {
    // alert(company_distict);
    if (business_distict != -1) {
      dispatch(getCityAction(business_distict));
    }
  }, [business_distict]);
  const onSubmitFunc = async () => {
    const userDataObj = {
      business_title,
      business_Name,
      user_id:id,
      business_email,
      business_category,
      business_state,
      business_distict,
      business_Taluka,
      business_city,
      working_days,
      start_Time,
      end_Time,
      address,
      business_description,
      business_contect_number,
      image,
    };

    console.log(userDataObj);
    const res = await addbusinessAPI(userDataObj);
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
          <lable>business_title</lable>
          <input
            type="text"
            className="form-control"
            value={business_title}
            onChange={(e) => setbusiness_title(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>business_Name</lable>
          <input
            type="text"
            className="form-control"
            value={business_Name}
            onChange={(e) => setbusiness_Name(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>business_email</lable>
          <input
            type="text"
            className="form-control"
            value={business_email}
            onChange={(e) => setbusiness_email(e.target.value)}
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
          <lable>business_description</lable>
          <input
            type="text"
            className="form-control"
            value={business_description}
            onChange={(e) => setbusiness_description(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>business_contect_number</lable>
          <input
            type="text"
            className="form-control"
            value={business_contect_number}
            onChange={(e) => setbusiness_contect_number(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>business_state</lable>
          <select
            style={{ background: "#e4ebea" }}
            name="business_state"
            as="select"
            className="formBg"
            id="business_state"
            value={business_state}
            onChange={(e) => {
              setbusiness_city(-1);
              setbusiness_distict(-1);
              dispatch(cleanCityAction());
              dispatch(cleanDistrictAction());

              setbusiness_state(e.target.value);
              //   values.business_state = e.target.value;
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
            value={business_state}
            onChange={(e) => setbusiness_state(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable> business_distict</lable>
          <select
            style={{ background: "#e4ebea" }}
            name=" business_distict"
            as="select"
            className="formBg"
            id=" business_distict"
            value={business_distict}
            // value={company_distict}
            onChange={(e) => {
              dispatch(cleanCityAction());
              setbusiness_city(-1);
              setbusiness_distict(e.target.value);
              //   values. business_distict = e.target.value;
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
            value={ business_distict}
            onChange={(e) => business_distict(e.target.value)}
          /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <lable>business_city</lable>
          <select
            style={{ background: "#e4ebea" }}
            name="business_city"
            className="formBg"
            as="select"
            id="business_city"
            value={business_city}
            onChange={(e) => {
              setbusiness_city(e.target.value);
              // values.business_city = e.target.value;
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
            value={business_city}
            onChange={(e) => business_city(e.target.value)}
          /> */}
        </div>
      </div>

      <div className="row"></div>
    
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <lable>Businessimage</lable>

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
      
      </div>
    </div>
  );
};

export default AddRojgarInfo;
