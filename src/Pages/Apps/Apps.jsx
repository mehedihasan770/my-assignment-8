import Card from "../../Components/card/Card";
import { useAppsJsonData } from "../../Hoks/DataFetch";

const Apps = () => {
    const {appsData} = useAppsJsonData()

    return (
        <div>
            <div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    appsData.map(appData => (
                        <Card key={appData.id} appData={appData}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Apps;