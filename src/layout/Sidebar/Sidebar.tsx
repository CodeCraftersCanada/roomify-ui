import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { IconContext } from "react-icons";
import { sidebarNavItems } from "../../routes";
import { SidebarNavItemProps } from "../../models/SidebarNavItemProps";
import logo from "../../assets/roomify-logo.jpeg"

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const renderNavItem = (item: SidebarNavItemProps, index: number, isSubItem: boolean = false) => {
        let isActive = false;
        if (isSubItem) {
            isActive = item.path !== undefined ? location.pathname.startsWith(item.path) : false;
        }
        else {
            isActive = location.pathname === item.path;
        }
        
        return (
            <div key={item.name + index+1}>
                <div
                    className={`sidebar-item ${item.children ? 'has-children' : ''} ${isActive ? 'active' : ''}`} 
                    key={item.name + index+2}
                    onClick={() => item.path && handleNavigation(item.path)}
                >
                    <span><item.icon/></span>
                    <span className="sidebar-label">{item.name}</span>
                </div>
                {item.children && (
                    <div className="sidebar-subitems"  key={item.name + index+3}>
                        {item.children.map((subItem, subIndex) => renderNavItem(subItem, subIndex, true))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Roomify Logo" />
            </div>
            <IconContext.Provider value={{ color: "#626262", size: "1.5em" }}>
                <div className="sidebar-content">
                    {sidebarNavItems.map((item, index) => renderNavItem(item, index))}
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Sidebar;
