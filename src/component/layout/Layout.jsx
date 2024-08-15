import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Emerghelp from "../emerghelp/Emerghelp";


const Layout = () => {
    return(
        <>
            <Outlet/>
            <Hero/>
            <Emerghelp/>
            <Footer/>

        </>
    )

}
export default Layout