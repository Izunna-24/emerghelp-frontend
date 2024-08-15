import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Emerghelp from "../emerghelp/Emerghelp";
import Navbar from "../navBar/Navbar";


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