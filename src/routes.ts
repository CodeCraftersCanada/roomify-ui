import { MdDashboard, MdOutlineApartment, MdOutlineEditNote, MdOutlinePeopleAlt, MdOutlinePerson, MdOutlineReport, MdOutlineSchool, MdOutlineVerified, } from "react-icons/md";
import { SidebarNavItemProps } from "./models/SidebarNavItemProps";
import { RoutePath } from "./enums/RoutePath";
import { RouteProps } from "./models/RouteProps";
import { Home, Login, PropertyVerification, UserVerification } from "./pages";
import Registration from "./pages/Registration/Registration";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail";
import UserDetail from "./pages/UserDetail/UserDetail";
import Report from "./pages/Report/Report";
import LandlordDetail from "./pages/LandlordDetail/LandlordDetail";


export const sidebarNavItems: SidebarNavItemProps[] = [
    {
        name: "dashboard",
        path: RoutePath.DASHBOARD,
        icon: MdDashboard,
        component: Home
    },
    {
        name: "verification",
        icon: MdOutlineVerified,
        children: [
            {
                name: "Students, Landlords, Colleges",
                path: RoutePath.USER_VERIFICATION,
                icon: MdOutlinePeopleAlt,
                component: UserVerification
            },
            {
                name: "Property",
                path: RoutePath.PROPERTY_VERIFICATION,
                icon: MdOutlineApartment,
                component: PropertyVerification 
            }           
        ]
    },
    {
        name: "Registration",
        icon: MdOutlineEditNote,
        children: [
            {
                name: "Colleges",
                path: RoutePath.COLLEGE_REGISTRATION,
                icon: MdOutlineSchool,
                component: Registration
            }          
        ]
    },
    {
        name: "Reports",
        icon: MdOutlineReport,
        children: [
            {
                name: "Landlords",
                path: RoutePath.LANDLORD,
                icon: MdOutlinePerson,
                component: Registration
            }          
        ]
    }     
];

export const routes: RouteProps[] = [
    {
        name: "Home",
        path: RoutePath.DASHBOARD,
        component: Home
    },
    {
        name: "Students, Landlords, Colleges",
        path: RoutePath.USER_VERIFICATION,
        component: UserVerification
    },
    {
        name: "Property",
        path: RoutePath.PROPERTY_VERIFICATION,
        component: PropertyVerification
    },    
    {
        name: "login",
        path: RoutePath.LOG_IN,
        component: Login
    },
    {
        name: "registration",
        path: RoutePath.COLLEGE_REGISTRATION,
        component: Registration
    },
    {
        name: "property",
        path: RoutePath.PROPERTY_DETAIL,
        component: PropertyDetail
    },
    {
        name: "user",
        path: RoutePath.USER_DETAIL,
        component: UserDetail
    },
    {
        name: "landlord",
        path: RoutePath.LANDLORD,
        component: Report
    },
    {
        name: "landlord",
        path: RoutePath.LANDLORD_DETAIL,
        component: LandlordDetail
    },      
];
