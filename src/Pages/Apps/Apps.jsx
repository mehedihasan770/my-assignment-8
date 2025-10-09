import { useEffect, useState } from "react";
import Card from "../../Components/card/Card";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import NoAppsFound from "../../Components/NoAppsFound/NoAppsFound";
import Loading from "../../Components/Loading/Loading";
import { MoonLoader } from "react-spinners";

const Apps = () => {
    const {appsData, loading} = useAppsJsonData()
    const [changeAppData, setChangeAppData] = useState([])
    const[load, setLoad] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const handleOnChange = e => {
        setSearchValue(e.target.value)
        setLoad(true)
        setTimeout(() => {
            const eChangeValue = appsData.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setChangeAppData(eChangeValue)
            setLoad(false)
        }, 500)
    }
    
    useEffect(() => {
        if(searchValue === ''){
            setChangeAppData(appsData)
        }
    }, [appsData, searchValue])
    
    if(loading){
        return <Loading/>
    }

    return (
        <div className="max-w-[1700px] mx-auto">
            <div className="py-20">
                <h1 className="text-3xl md:text-[48px] font-bold text-center">Our All Applications</h1>
                <p className="text-center text-[20px] text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="mb-7 flex flex-col-reverse md:flex-row justify-center items-center md:justify-between">
                <h1 className="font-bold mt-5 md:mt-0 text-center md:text-left text-[24px]">({changeAppData.length}) Apps Found</h1>
                <input type="search" value={searchValue} onChange={handleOnChange} name="search Apps" placeholder="🔍 Search apps" className="border border-gray-300 rounded-md p-2 text-black max-w-96 md:w-96 placeholder-gray-400 outline-none"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-9">
                {
                    load ? <div className="lg:h-90 md:w-[800px] lg:w-[1700px] flex justify-center items-center"><h1><MoonLoader color="blue"/></h1></div> : changeAppData.length === 0 ? <div className="lg:h-90 text-center md:w-[800px] lg:w-[1700px] flex justify-center items-center"><h1 className="text-5xl font-bold text-gray-400">No Apps Found</h1></div> : changeAppData.map(appData => (<Card key={appData.id} appData={appData}/>))
                }
            </div>
        </div>
    );
};

export default Apps;