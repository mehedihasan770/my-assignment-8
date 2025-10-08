import { useEffect, useState } from "react";
import { getLocleStorgData, removeAppsDataForLocleStoreg } from "../../Hoks/LocleStoregData";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import Loading from "../../Components/Loading/Loading";

const Installation = () => {

    const {loading} = useAppsJsonData()

    const [installedApps, setInstalledApps] = useState([])
    useEffect(() => {
        const iinstalledAppsData = getLocleStorgData()
        setInstalledApps(iinstalledAppsData)
    }, [])

    const handleAppsRemove = data => {
        setInstalledApps(installedApps.filter(app => app.id !== data.id))
        removeAppsDataForLocleStoreg(data)
    }   
    
    if(loading){
        return <Loading/>
    }

    return (
        <div>
            <div className="max-w-[1700px] mx-auto">
                <div className="py-20">
                    <h1 className="text-[48px] font-bold text-center">Our All Applications</h1>
                    <p className="text-center text-[20px] text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="mb-7 flex flex-col-reverse md:flex-row md:justify-between">
                    <h1 className="font-bold mt-5 md:mt-0 text-center md:text-left text-[24px]">({installedApps.length}) Apps Found</h1>
                    <input type="search" name="search Apps" placeholder="Search apps" className="border border-gray-300 rounded-md p-2 text-black max-w-96 md:w-96 placeholder-gray-400 outline-none"/>
                </div>
            </div>
            <div className="max-w-[1700px] mx-auto space-y-5  min-h-screen pb-10">
                { installedApps.length === 0 ? <div className="min-h-screen flex justify-center items-center"><h1 className="text-center text-4xl font-bold text-gray-500">No Installed Apps</h1></div> : installedApps.map(app => (
                <div key={app.id} className="flex justify-between bg-white rounded-b-sm items-center py-6 px-5">
                    <div className="flex items-center space-x-5">
                        <div className="bg-gray-300 p-5 rounded-lg">
                            <img src={app?.image} alt="" width={' 50px'}/>
                        </div>
                        <div>
                            <h1 className="mb-5 text-[20px] font-semibold">{app?.title}</h1>
                            <div className="flex space-x-5">
                                <p className="font-semibold text-[#00D390]">{app?.downloads}</p>
                                <p className="font-semibold text-[#FF8811]">{app?.ratingAvg}</p>
                                <p className="font-semibold text-[#6C7C8A]">{app?.size} MB</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleAppsRemove(app)} className="btn bg-[#00D390] py-6 px-6 text-[17px] text-white">Uninstall</button>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Installation;