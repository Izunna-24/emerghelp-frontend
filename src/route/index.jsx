import Layout from "../component/layout/Layout";
import Login from "../component/pages/login/Login";
import Register from "../component/pages/usersignup/Register";
import BecomeAMedic from "../component/pages/become a medic/BecomeAMedic";
import SetProfile from "../component/pages/usersignup/SetProfile";
import Dashboard from "../component/pages/usersignup/Dashboard";
import SetMedicProfile from "../component/pages/become a medic/SetMedicProfile";
import MedicDashboard from "../component/pages/become a medic/MedicDashboard";

import AboutUs from "../component/navbarpages/AboutUs";
import ResponseTeam from "../component/navbarpages/ResponseTeam";
import OrderMedic from "../component/pages/orderMedic/OrderMedic";
import AcceptRequest from "../component/pages/accept request/AcceptOrder";



export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path:"/accept-request",
        element: <AcceptRequest/>,
    },
    {
      path:"/orderMedic",
      element: <OrderMedic/>,
    },
    {
        path: "/setProfile",
        element: <SetProfile/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/becomeAMedic",
        element: <BecomeAMedic/>,
    },
    {
        path: "setMedicProfile",
        element: <SetMedicProfile/>,
    },
    {
        path: "medicDashboard",
        element: <MedicDashboard/>,
    },
    {
        path: "/aboutUs",
        element: <AboutUs/>,
    },
    {
        path: "/responseTeam",
        element: <ResponseTeam/>,
    },
]
