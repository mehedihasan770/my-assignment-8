import axios from "axios"
import { useEffect, useState } from "react"

export const useAppsJsonData = () => {
    const [appsData, setAppsData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get('/appsData.json')
        .then(data => setAppsData(data.data))
        .catch(err => setError(err))
        .finally(() => 
            setTimeout(() => {
                setLoading(false)
            },500)
        )
        
    }, [])
    return {appsData, error, loading}
}