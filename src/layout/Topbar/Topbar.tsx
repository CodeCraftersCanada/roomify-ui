import React from "react";
import "./Topbar.scss";
import avatar from "../../assets/avatar.png";
import { MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="notification-wrapper">
                <MdOutlineSettings size={40} color="#626262"/>
            </div>            
            <div className="notification-wrapper">
                <MdOutlineNotifications size={40} color="#626262"/>
            </div>
            <div className="avatar-wrapper">
                <img src={avatar} alt="Avatar placeholder" />
            </div>
        </div>
    )
}

export default Topbar;