import "./_category.scss";

import React, { useState } from "react";
const keywords = [
  "સમગ્ર",
  "આવેદનપત્ર",
  "ગૌસેવા",
  "ગૌરક્ષા",
  "અબોલ પશુઓની સેવા"
 
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
