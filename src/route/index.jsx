import Layout from "../component/layout/Layout";
import Register from "../component/pages/usersignup/Register";
import SetMedicProfile from "../component/pages/become a medic/SetMedicProfile";
import Dashboard from "../component/pages/usersignup/Dashboard";
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
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/setMedicProfile",
        element: <SetMedicProfile/>,
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
        path: "/dashboard",
        element: <Dashboard/>,
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
