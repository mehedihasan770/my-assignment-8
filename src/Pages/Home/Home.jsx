import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Loading from "../../Components/Loading/Loading";
import { useAppsJsonData } from "../../Hoks/DataFetch";

const Home = () => {
    const {loading} = useAppsJsonData()
    if(loading){
        return <Loading/>
    }

    return (
        <div>
            <Banner/>
            <Cards/>
        </div>
    );
};

export default Home;