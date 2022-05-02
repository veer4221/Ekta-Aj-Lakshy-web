import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addUserAPI, uploadIcardAPI, userProfileAPI } from "../../../../../api";
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
const UploadIcard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [iCardImage, setiCardImage] = React.useState();
  const [icard_id, seticard_id] = React.useState();

  //   const [image, setImage] =React.useState();
  console.log("id", id);
  const uploadIcardImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log(base64, "bsae");
    setiCardImage(base64);
  };

  useEffect(async () => {
    const data = await userProfileAPI(id);
    if (data.status === 200 && data.data.success == true) {
        console.log(data?.data?.adminUser)
      setiCardImage(data?.data?.adminUser?.iCardImage || "");
      seticard_id(data?.data?.adminUser?.icard_id || "");
    }
  }, []);

  const onSubmitFunc = async () => {
    const userDataObj = {
      id,
      icard_id,
      iCardImage,
    };

    const res = await uploadIcardAPI(userDataObj);
    if (res.status === 200 && res.data.success == true)
      return navigate(`/ektaAdmin/UserList`);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">Icard Upload</div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <label>icardId</label>
          <input
            type="text"
            value={icard_id}
            name="icard"
            className="form-control"
            onChange={(e) => seticard_id(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <label>icardImage</label>
          <div class="custom-file">
            <input
              onChange={(e) => {
                //   setFieldValue("docImage", e.target.files[0]);

                uploadIcardImage(e);
              }}
              type="file"
              class="custom-file-input"
              id="customFile"
            />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <button className="btn btn-primary" onClick={onSubmitFunc}>Upload</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${iCardImage}`} height="400" width="600" />
        </div>
      </div>
    </div>
  );
};

export default UploadIcard;
