import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.scss"
import { Outlet } from "react-router";

const Layout = () => (
    <div className="layout-container">
        <Sidebar />
        <div className="layout-content">
            <Topbar />
            <Outlet />
        </div>
    </div>
);

export default Layout;