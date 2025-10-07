import { Outlet } from "react-router";
import Navber from "../../Components/Navber/Navber";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <div className="px-3 md:px-0 bg-[#F5F5F5]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;