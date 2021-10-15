import React, { useEffect } from "react";
import AchivemtnsData from "./AchivemtnsData";
import { useDispatch, useSelector } from "react-redux";
import { getAchiveAction } from "../../../Redux/Actions/index";

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
  useEffect(() => {
    dispatch(getAchiveAction());
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
              {AxhivemtnsCaseData &&
                AxhivemtnsCaseData.map((data) => (
                  <AchivemtnsData data={data} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivemtns;
