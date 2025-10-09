import { Outlet } from "react-router";
import Navber from "../../Components/Navber/Navber";
import Footer from "../../Components/Footer/Footer";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import Loading from "../../Components/Loading/Loading";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    const {loading} = useAppsJsonData()

    return (
        <div>
            <Navber/>
            {
                loading ? <Loading/> : 
                    <div className="px-3 md:px-5 lg:px-0 bg-[#F5F5F5] min-h-screen">
                        <Outlet/>
                    </div>
                }
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;