import { useEffect, useState } from "react";
import Card from "../../Components/card/Card";
import { useAppsJsonData } from "../../Hoks/DataFetch";

const Apps = () => {
    const {appsData} = useAppsJsonData()
    const [changeAppData, setChangeAppData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const handleOnChange = e => {
        setSearchValue(e.target.value)
        const eChangeValue = appsData.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setChangeAppData(eChangeValue)
    }
    
    useEffect(() => {
        if(searchValue === ''){
            setChangeAppData(appsData)
        }
    }, [appsData, searchValue])


    return (
        <div className="max-w-[1700px] mx-auto">
            <div className="py-20">
                <h1 className="text-[48px] font-bold text-center">Our All Applications</h1>
                <p className="text-center text-[20px] text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="mb-7 flex flex-col md:flex-row md:justify-between">
                <h1 className="font-bold text-center md:text-left text-[24px]">({changeAppData.length}) Apps Found</h1>
                <input type="search" value={searchValue} onChange={handleOnChange} name="search Apps" placeholder="Search apps" className="border border-gray-300 rounded-md p-2 text-black w-96 placeholder-gray-400 outline-none"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    changeAppData.length === 0 ? <h1>NO APPS FOUND</h1> : changeAppData.map(appData => (<Card key={appData.id} appData={appData}/>))
                }
            </div>
        </div>
    );
};

export default Apps;