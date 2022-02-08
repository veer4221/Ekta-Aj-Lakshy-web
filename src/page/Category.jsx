import "./_category.scss";

import React, { useState } from "react";
const keywords = [
  {value:"સમગ્ર",enum:"all"},
  {value:"આવેદનપત્ર",enum:"avedan"},
  {value:"ગૌસેવા",enum:"gauseva"},
  {value:"ગૌરક્ષા",enum:"gauraksh"},
  {value:"અબોલ પશુઓની સેવા",enum:"abolapashu"},
  {value:"હિન્દુ જાગૃત અભિયાન",enum:"hindujagruti"},
 
];
const Category = ({setCategoryG}) => {
  const [activeElement, setActiveElement] = useState("all");

  const handleClick = (value) => {
    setActiveElement(value);
    setCategoryG(value)

  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value.enum)}
          key={i}
          className={activeElement === value.enum ? "active" : ""}
        >
          {value?.value}
        </span>
      ))}
    </div>
  );
};

export default Category;
