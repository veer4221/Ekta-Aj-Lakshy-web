import React from 'react'

const ShakhaCard = ({data}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
              <div className="event-box">
                <img src={data.imgLink} alt="" />
                <h4>{data.name}</h4>

                <p className="raises">
                  <span>Raised : $34,425</span> / $500,000{" "}
                </p>
                <p className="desic">
                 {data.information}
                </p>
                <button className="btn btn-success btn-sm">Donate Now</button>
              </div>
            </div>
        </>
    )
}

export default ShakhaCard
