import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Emerghelp from "../emerghelp/Emerghelp";
import Login from "../pages/login/Login";


const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Hero/>
            <Emerghelp/>
            <Footer/>

        </>
    )

}
export default Layout