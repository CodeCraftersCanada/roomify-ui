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

    const renderNavItem = (item: SidebarNavItemProps) => {
        const isActive = location.pathname === item.path;

        return (
            <>
                <div 
                    className={`sidebar-item ${item.children ? 'has-children' : ''} ${isActive ? 'active' : ''}`} 
                    key={item.name}
                    onClick={() => item.path && handleNavigation(item.path)}
                >
                    <span><item.icon/></span>
                    <span className="sidebar-label">{item.name}</span>
                </div>
                {item.children && (
                    <div className="sidebar-subitems">
                        {item.children.map(subItem => renderNavItem(subItem))}
                    </div>
                )}
            </>
        );
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Roomify Logo" />
            </div>
            <IconContext.Provider value={{ color: "#626262", size: "1.5em" }}>
                <div className="sidebar-content">
                    {sidebarNavItems.map(item => renderNavItem(item))}
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Sidebar;
