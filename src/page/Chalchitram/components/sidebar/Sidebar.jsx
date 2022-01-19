import "./_sidebar.scss";

import {
  MdExitToApp,
  MdHistory,
  MdHome,
  MdLibraryBooks,
  MdSentimentDissatisfied,
  MdSubscriptions,
  MdThumbUp,
} from "react-icons/md";

import { AiTwotoneFire } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { MdHistoryEdu } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { selectCategoryAction } from "../../../../Redux/Actions";

// import {} from"import { IconName } from "react-icons/ai";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li onClick={() => navigate(`/ChalChitram/Home`)}>
        <MdHome size={23} />
        <span>હોમ</span>
      </li>
      <li onClick={() => navigate(`/ChalChitram/LatestVideo`)}>
        <AiTwotoneFire size={23} />
        <span>નવીનતમ વિડિઓ</span>
      </li>

      <li onClick={() => navigate(`/ChalChitram/Syllabus`)}>
        <GiBookmarklet size={23} />
        <span>અભ્યાસક્રમ</span>
      </li>
      <li onClick={() => navigate(`/ChalChitram/History`)}>
        <MdHistoryEdu size={23} />
        <span>ઇતિહાસ</span>
      </li>
      <li onClick={() => navigate(`/ChalChitram/Shakha`)}>
        <FaCodeBranch size={23} />
        <span>શાખા</span>
      </li>

      <li
        onClick={() => {
          navigate(`/ChalChitram/category/important`);
          dispatch(selectCategoryAction("important"));
        }}
      >
        <GoAlert size={23} />
        <span>ચૂકશો નહીં</span>
      </li>

      <hr />

      <li onClick={() => navigate(`/`)}>
        <MdExitToApp size={23} />
        <span> બહાર </span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
