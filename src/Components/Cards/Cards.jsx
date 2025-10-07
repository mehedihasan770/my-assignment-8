import { Link } from "react-router";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import Card from "../card/Card";

const Cards = () => {
    const {appsData} = useAppsJsonData()
    const cliceAppsData = appsData.slice(0,8)

    return (
        <div className="max-w-[1700px] mx-auto">
            <div className="py-10">
                <h1 className="text-center text-[48px] font-bold">Trending Apps</h1>
                <p className="text-center text-[20px] text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    cliceAppsData.map(appData => <Card key={appData.id} appData={appData}/>)
                }
            </div>
            <div className="w-40 mx-auto py-10">
                <Link to={'/apps'}><button className='btn w-45 p-6 border-0 bg-gradient-to-br to-[#9F62F2] from-[#6530E4] font-semibold text-white text-[17px]'>Show All</button></Link>
            </div>
        </div>
    );
};

export default Cards;