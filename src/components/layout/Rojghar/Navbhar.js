import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
// import AddBusinessIcon from '@material-ui/icons/AddBusiness';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./navbhar.css"
import { IconButton } from '@material-ui/core';
const Navbhar = () => {
    const navigate = useNavigate()
    return (
        <div className="allEle">
            <nav className="navbar">
                <h1 className="Logo">Rojghar</h1> 
                <IconButton className="logoutDeskTop" onClick={() => {
                        navigate(`/auth/login`)
                    }}> <ExitToAppIcon /></IconButton>
                <ul className="desktop-list">
                    <li><Link className="linknav" to={`/Rojgharmain/FindJob`}><HomeIcon />Home</Link> </li>
                    <li><Link className="linknav" to={`/Rojgharmain/FindJob`}><AddCircleOutlineIcon />Hire</Link> </li>

                    <li><Link className="linknav" to={`/Rojgharmain/FindJob`}><SearchIcon />FindJob</Link> </li>
                    <li><Link className="linknav" to={`/Rojgharmain/profilePage`}><AccountBoxIcon />Profile</Link> </li>
                    <li><Link className="linknav" to={`/auth/login`}><ExitToAppIcon />LogOut</Link> </li>
                </ul>
                <ul className="mobile-list" style={{background:"black"}}>
                    <li><IconButton onClick={() => {
                        navigate(`/Rojgharmain/FindJob`)
                    }}> <HomeIcon style={{color:"white"}} /></IconButton></li>
                    <li><IconButton onClick={() => {
                        navigate(`/Rojgharmain/FindJob`)
                    }}><AddCircleOutlineIcon style={{color:"white"}}/></IconButton></li>

                    <li onClick={() => {
                        navigate(`/Rojgharmain/FindJob`)
                    }}><IconButton><SearchIcon style={{color:"white"}} /></IconButton></li>
                    <li onClick={() => {
                        navigate(`/Rojgharmain/profilePage`)
                    }}><IconButton><AccountBoxIcon  style={{color:"white"}}/></IconButton></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbhar
