import { toast } from "react-toastify";

const getLocleStorgData = () => {
    const getLocleData = localStorage.getItem('appData');

    if(getLocleData){
        return JSON.parse(getLocleData);
    }
    else{
        return [];
    }
}


const addAppsDataToLocleStoreg = (id) => {
    const appsData = getLocleStorgData()

    if(appsData.find(app => app.id === id.id)){
        return
    }
    else{
        toast ('✅ App Installed Done')
        appsData.push(id)
        const app = JSON.stringify(appsData)
        localStorage.setItem('appData',app)
    }
}

const removeAppsDataForLocleStoreg = id => {
    const appsData = getLocleStorgData()

    const findAppData = appsData.filter(app => app.id !== id.id)
    toast ('❌Your App Uninstall Done')
    localStorage.setItem('appData', JSON.stringify(findAppData))
}

export {getLocleStorgData, addAppsDataToLocleStoreg, removeAppsDataForLocleStoreg}