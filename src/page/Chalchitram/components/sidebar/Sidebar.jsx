import React from 'react'
import "./_sidebar.scss"
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 
 } from "react-icons/md"
 import { AiTwotoneFire } from "react-icons/ai";
 import { GiBookmarklet } from "react-icons/gi";
 import { FaCodeBranch } from "react-icons/fa";
 import { GoAlert } from "react-icons/go";
// import {} from"import { IconName } from "react-icons/ai";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    return (
        <nav
        className={sidebar ? "sidebar open" : "sidebar"}
        onClick={() => handleToggleSidebar(false)}
        >
        <li>
           <MdHome size={23} />
           <span>હોમ</span>
        </li>
        <li>
           <AiTwotoneFire size={23} />
           <span>નવીનતમ વિડિઓ</span>
        </li>

        <li>
           <GiBookmarklet size={23} />
           <span>અભ્યાસક્રમ</span>
        </li>

        <li>
           <FaCodeBranch size={23} />
           <span>શાખા</span>
        </li>

      
        <li>
           <GoAlert size={23} />
           <span>ચૂકશો નહીં</span>
        </li>
       

        <hr />

        <li>
           <MdExitToApp size={23} />
           <span>Log Out</span>
        </li>

        <hr />
     </nav>
    )
}

export default Sidebar
