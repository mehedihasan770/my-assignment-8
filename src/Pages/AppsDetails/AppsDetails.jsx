import React from 'react';
import AppsNotFound from '../Apps/AppsNotFound/AppsNotFound';
import { Outlet, useParams } from 'react-router';
import { useAppsJsonData } from '../../Hoks/DataFetch';

const AppsDetails = () => {
    const {appsData} = useAppsJsonData()
    const {id} = useParams()

    const idNum = Number(id)
    
    const appsId = appsData.find(data => data.id === idNum)
    if (!appsId) {
        return <AppsNotFound />;
    }

    return (
        <div>
            halllo app
        </div>
    );
};

export default AppsDetails;