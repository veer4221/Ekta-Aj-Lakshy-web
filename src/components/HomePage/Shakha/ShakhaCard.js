import "../../../style/buttoncss.css";

import React, { Suspense, lazy } from "react";

import TextTruncate from "react-text-truncate";

// const ViewMore = React.lazy(() => import('"./ViewMore"'));
const ViewMore = lazy(() => import(`./ViewMore`));

const ShakhaCard = ({ data }) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 ">
        <div
          className="event-box ourBtn"
          style={{
            boxShadow: "rgb(0 0 0 / 35%) 0px 8px 20px 7px",
            borderRadius: "10px 10px ",
            border: "1.9px solid gray",
            backgroundColor: "white",

            padding: "10px",
          }}
        >
          <img src={data.imgLink} alt="" />
          <h4 style={{ color: "rgb(172, 24, 24)" }}>
            ||&nbsp;{data.name}&nbsp;||
          </h4>
          {/* <p className="desic">{data.information}</p> */}
          <TextTruncate
            line={3}
            element="p"
            truncateText="..."
            text={data.information}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <ViewMore
              imageUrl={data.imgLink}
              info={data.information}
              subBranch={data.subBranch}
              title={data.name}
              CONST_SHAKHA={data.CONST_SHAKHA}
            />
          </Suspense>
          {/* <button style={{ padding: "7px" }}>&nbsp; ||વધુ જોવો||&nbsp;</button> */}
        </div>
      </div>
    </>
  );
};

export default ShakhaCard;
