import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import DonetusImg from "./DonetusImg";

const Header = () => {
  return (
    <>
      <header className="continer-fluid ">
        {/* <TopHeader/> */}
        <DonetusImg />

        <BottomHeader />
      </header>
    </>
  );
};

export default Header;
