import { css } from "@emotion/react";

import React, { useState } from "react";

import "./loader2.css";

export default function Splash({ loading }) {
  return <>{loading == true ? <div className="loaderclass" style={{height:"100%",width:"100%",backgroundColor:"#ffff"}}></div> : ``} </>;
}
