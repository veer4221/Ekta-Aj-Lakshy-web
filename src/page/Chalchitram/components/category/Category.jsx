import "./_category.scss";

import React, { useState } from "react";
const keywords = [
  "સમગ્ર",
  "રોજગારશાખા",
  "મુખ્યશાખા",
  "આઇટી સેલ",
  "હિન્દુ રોજગાર શાખા",
  "નારી શક્તિ શાખા",
  "યુવા શાખા",
  "કામધેનુ શાખા",
  "પ્રચાર-પ્રસાર શાખા",
  "એકલવ્ય સમિતિ",
  "સમર્પણ સમિતિ",
  "ગુપ્ત સમિતિ",
  "કામધેનુ સમિતિ",
  "તરુણ",
  "યુવાન",
  "વૃદ્ધ",
];
const Category = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Category;
