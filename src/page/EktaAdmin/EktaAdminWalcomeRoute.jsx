import "./_app.scss";
import "./_base.scss";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

//   import { Route, Routes } from "react-router";

// const Navbar = Loadable(
//   React.lazy(() => import("./components/layout/Rojghar/Navbhar"))
// );

const EktaAdminWalcomeRoute = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  const auth = localStorage.getItem("adminToken");
  //   const auth = useSelector((state) => state.auth);

  return  <Outlet /> ;
};

export default EktaAdminWalcomeRoute;
