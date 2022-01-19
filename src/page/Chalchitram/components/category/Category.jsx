import "./_category.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryAction } from "../../../../Redux/Actions";
const keywords = [
  { value: "સમગ્ર", enum: "all" },
  { value: "ચૂકશો નહીં", enum: "important" },
  { value: "રોજગારશાખા", enum: "rojgharShakha" },
  { value: "મુખ્યશાખા", enum: "mukhyaShakha" },
  { value: "આઇટી સેલ", enum: "itcell" },
  { value: "નારી શક્તિ શાખા", enum: "nariShakha" },
  { value: "યુવા શાખા", enum: "yuvaShakha" },
  { value: "કામધેનુ શાખા", enum: "kamdhenuShakha" },
  { value: "પ્રચાર-પ્રસાર શાખા", enum: "pracharprasarShakha" },
  { value: "એકલવ્ય સમિતિ", enum: "eklavySamiti" },
  { value: "સમર્પણ સમિતિ", enum: "samarpanSamiti" },
  { value: "ગુપ્ત સમિતિ", enum: "guptSamiti" },
  { value: "કામધેનુ સમિતિ", enum: "kamdhenuSamiti" },
];
const Category = () => {
  const chalchitram = useSelector((state) => state.chalchitram);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState("All");
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);

  const handleClick = (value) => {
    setActiveElement(value);

    navigate(`/ChalChitram/category/${value}`);
    dispatch(selectCategoryAction(value));
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value.enum)}
          key={i}
          className={
            chalchitram?.selectedCategory === value.enum ? "active" : ""
          }
        >
          {value.value}
        </span>
      ))}
    </div>
  );
};

export default Category;
