import { useEffect, useState } from "react";
import { getLocleStorgData, removeAppsDataForLocleStoreg } from "../../Hoks/LocleStoregData";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import Loading from "../../Components/Loading/Loading";
import dimg from '../../assets/icon-downloads.png'
import rimg from '../../assets/icon-ratings.png'

const Installation = () => {

    const {loading} = useAppsJsonData()
    const [sort, setSort] = useState('')
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

    const handleOnChange = (e) => {
        setSort(e.target.value)
        if(e.target.value === "High to Low"){
            setInstalledApps([...installedApps].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads)))
        } else if(e.target.value === "Low to High"){
            setInstalledApps([...installedApps].sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads)))
        }
    }
    return (
        <div>
            <div className="max-w-[1700px] mx-auto">
                <div className="py-20">
                    <h1 className="text-4xl md:text-[48px] font-bold text-center">Your Installed Apps</h1>
                    <p className="text-center text-[20px] text-gray-500">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="mb-7 flex flex-col-reverse md:flex-row md:justify-between">
                    <h1 className="font-bold mt-5 md:mt-0 text-center md:text-left text-[24px]">({installedApps.length}) Apps Found</h1>
                    <select name="Sotr by size" id="" value={sort} onChange={handleOnChange} className="w-50 h-10 md:h-auto mx-auto md:mx-0 rounded-lg bg-gray-300 px-2 font-semibold">
                        <option value="Sort By Download">Sort By Download</option>
                        <option  value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>
                </div>
            </div>
            <div className="max-w-[1700px] mx-auto space-y-5  min-h-screen pb-10">
                { installedApps.length === 0 ? <div className="min-h-screen flex justify-center items-center"><h1 className="text-center text-4xl font-bold text-gray-500">No Installed Apps</h1></div> : installedApps.map(app => (
                <div key={app.id} className="flex justify-between bg-white rounded-b-sm items-center py-3 md:py-6 px-5">
                    <div className="flex items-center space-x-2 md:space-x-5">
                        <div className="bg-gray-300 p-2 md:p-5 rounded-lg">
                            <img className="w-[40px] md:w-[50px] " src={app?.image} alt="" />
                        </div>
                        <div>
                            <h1 className="mb-2 md:mb-5 text-[20px] font-semibold">{app?.title}</h1>
                            <div className="flex space-x-2 md:space-x-5">
                                <p className="md:font-semibold text-[#00D390]"><img className="w-[14px] inline-block mr-1" src={dimg} alt="" />{app?.downloads}</p>
                                <p className="md:font-semibold text-[#FF8811]"><img className="w-[14px] inline-block mr-1" src={rimg} alt="" />{app?.ratingAvg}</p>
                                <p className="md:font-semibold text-[#6C7C8A]">{app?.size} MB</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleAppsRemove(app)} className="btn bg-[#00D390] md:py-6 md:px-6 md:text-[17px] text-white">Uninstall</button>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Installation;