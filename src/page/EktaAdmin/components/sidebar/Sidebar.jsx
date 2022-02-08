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
import { FaBusinessTime } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { BsImages } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
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
      <li onClick={() => navigate(`/ektaAdmin/Achieve`)}>
        <GiAchievement size={23} color="white" />
        <span>સિદ્ધિ</span>
      </li>
      <li onClick={() => navigate(`/ektaAdmin/UserList`)}>
        <FaUserAlt size={23} />
        <span>કાર્યકર્તા</span>
      </li>

      <li onClick={() => navigate(`/ektaAdmin/PostList`)}>
        <HiDocumentReport size={23} />
        <span>અહેવાલ</span>
      </li>
      <li onClick={() => navigate(`/ektaAdmin/GallaeryList`)}>
        <BsImages size={23} />
        <span>ગેલેરી </span>
      </li>
      <li onClick={() => navigate(`/ektaAdmin/PostList`)}>
        <FaBusinessTime size={23} />
        <span>રોજગાર </span>
      </li>
      <li onClick={() => navigate(`/ektaAdmin/PostList`)}>
        <GiShop size={23} />
        <span>વ્યવસાય</span>
      </li>
      <li onClick={() => navigate(`/ektaAdmin/ChalChitram`)}>
        <RiVideoFill size={23} />
        <span>ચલચિત્રમ</span>
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
