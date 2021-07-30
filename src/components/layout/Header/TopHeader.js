import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row col-det">
            <div className="col-lg-6 d-none d-lg-block">
              <ul className="ulleft">
                <li>
                  <i className="far fa-envelope"></i>
                    EKTA EJ LAKSH
                    <span>|</span>
                </li>
                <li>
                  <i className="fas fa-phone-volume"></i>
                    989898989
                  </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 folouws">
              <ul className="ulright">
                <li>
                  {" "}
                  <small>Folow Us </small>:
                  </li>
                <li>
                  <i className="fab fa-facebook-square"></i>
                </li>
                <li>
                  <i className="fab fa-twitter-square"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
              <button className="btn btn-sm btn-success">Join Us</button>
              <button className="btn btn-sm btn-default">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
