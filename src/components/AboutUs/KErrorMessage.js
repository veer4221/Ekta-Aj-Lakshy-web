import { ErrorMessage } from "formik";

import React from "react";

const KErrorMessage = ({ name }) => {
  return (
    <div style={{ color: "red", marginTop: "-20px" }}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default KErrorMessage;
