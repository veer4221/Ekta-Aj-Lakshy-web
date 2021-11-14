import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addAchiveAPI } from "../../../api";
import { getAchiveAction } from "../../../Redux/Actions/index";

import AchivemtnsData from "./AchivemtnsData";

const AxhivemtnsCaseData = [
  {
    number: 12,
    lebel: `વીઝીટર`,
  },
  {
    number: 12,
    lebel: `રજિસ્ટર મેમ્બર `,
  },
  {
    number: 12,
    lebel: `ટોટલ મેમ્બર`,
  },

  {
    number: 12,
    lebel: `સેવાકીય કાર્ય `,
  },
  {
    number: 12,
    lebel: `લવ જેહાદ`,
  },
  {
    number: 12,
    lebel: `ગૌ સેવા`,
  },
  {
    number: 12,
    lebel: `ગૌ સેવા`,
  },
  {
    number: 12,
    lebel: `ઘરવાપસી `,
  },
];
var temp = 0;
const Achivemtns = () => {
  const achieve = useSelector((state) => state.achive);
  const dispatch = useDispatch();
  // useEffect(() => {

  // }, [achieve.achieve.rows[0]]);
  useEffect(async () => {
    dispatch(getAchiveAction());
    if (!!localStorage.getItem("oldUser")) {
    } else {
      localStorage.setItem("oldUser", 1);
      await addAchiveAPI();
    }
  }, []);
  if (achieve.achieve.rows[0] && temp == 0) {
    temp = 1;
    AxhivemtnsCaseData.push(
      {
        number: achieve.achieve.rows[0].gau_raksha,
        lebel: `ગૌરક્ષા`,
      },
      {
        number: achieve.achieve.rows[0].love_jihad,
        lebel: `લવજેહાદ`,
      },
      {
        number: achieve.achieve.rows[0].protect_girl,
        lebel: `જમીન જેહાદ`,
      }
    );
  }

  return (
    <>
      <div className="doctor-message">
        <div className="inner-lay">
          <div className="container">
            <div className="row session-title">
              <h2>Our Achievemtns in Numbers</h2>
            </div>
            <div className="row">
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.visitor}+`}</h3>
                <span>વીઝીટર</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.registerMembers}+`}</h3>
                <span>રજિસ્ટર મેમ્બર</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.totalMembers}+`}</h3>
                <span>ટોટલ મેમ્બર</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.sevakiyaKary}+`}</h3>
                <span>સેવાકીય કાર્ય</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.love_jihad}+`}</h3>
                <span>લવ જેહાદ</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.gau_seva}+`}</h3>
                <span>ગૌ રક્ષા </span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.gau_raksha}+`}</h3>
                <span>ગૌ સેવા</span>
              </div>
              <div className="col-sm-3 numb">
                <h3>{`${achieve.achieve.rows[0]?.gar_vapsi}+`}</h3>
                <span> ઘરવાપસી </span>
              </div>
              {/* {AxhivemtnsCaseData &&
                AxhivemtnsCaseData.map((data) => (
                  <AchivemtnsData data={data} />
                ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivemtns;
