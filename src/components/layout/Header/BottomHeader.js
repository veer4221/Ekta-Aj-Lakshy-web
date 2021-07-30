import React from 'react'
import { useNavigate } from 'react-router'

const BottomHeader = () => {
  const navigate=useNavigate();
    return (
        <>
           <div id="menu-jk" className="header-bottom" >
          <div className="container">
            <div className="row nav-row">
              <div className="col-lg-3 col-md-12 logo">
                <a href="index.html">
                  <img src="assets/images/logo.jpg" alt="" />
                  <a data-toggle="collapse" data-target="#menu" href="#menu">
                    <i className="fas d-block d-lg-none  small-menu fa-bars"></i>
                  </a>
                </a>
              </div>
              <div
                id="menu"
                className="col-lg-9 col-md-12 d-none d-lg-block nav-col"
              >
                <ul className="navbad">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={()=>{navigate("/")}}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about_us.html">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" onClick={()=>{navigate("/Gallery")}}>
                      Gallery
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact_us.html">
                      Contact US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default BottomHeader
