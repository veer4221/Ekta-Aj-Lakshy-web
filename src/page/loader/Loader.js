import { css } from "@emotion/react";

import React, { useState } from "react";

import "./loader.css";

export default function Loader({ loading }) {
  return <>{loading == true ? <div className="loaderclass"></div> : ``} </>;
}
