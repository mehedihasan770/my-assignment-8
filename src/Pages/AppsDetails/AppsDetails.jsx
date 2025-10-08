import { useEffect, useState } from 'react';
import AppsNotFound from '../Apps/AppsNotFound/AppsNotFound';
import { useParams } from 'react-router';
import { useAppsJsonData } from '../../Hoks/DataFetch';
import downimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import reviwimg from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addAppsDataToLocleStoreg, getLocleStorgData } from '../../Hoks/LocleStoregData';
import Loading from '../../Components/Loading/Loading';

const AppsDetails = () => {
    const {appsData, loading} = useAppsJsonData()
    const [appDatas, setAppDatas] = useState([])
    const [appIntalled, setAppIntalled] = useState(false)
    const {image, title, companyName, size, id, reviews, ratingAvg, downloads, ratings, description} = appDatas
    const {ids} = useParams()

    const idNum = Number(ids)

    useEffect(() => {
        const singleAppData = appsData.find(singData => singData.id === idNum)
        if(singleAppData){
            setAppDatas(singleAppData)
        }
    },[appsData, idNum])

    useEffect(() => {
        const localeAppData = getLocleStorgData()
        const setLocaleAppData = localeAppData.some(app => app.id === id)
        setAppIntalled(setLocaleAppData)
    },[id,])

    if(loading){
       return <Loading/>
    }

    const handleChackLoleData = () => {
        setAppIntalled(true)
    }
    
    if (appsData.length === 0) {
        return 
    }

    const appsId = appsData.find(data => data.id === idNum)
    if (!appsId) {
        return <AppsNotFound />;
    }

    const handleSetData = (data) => {
        addAppsDataToLocleStoreg(data)
    } 

    

    return (
        <div className='max-w-[1700px] mx-auto py-20'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center space-x-10'>
                    <div className='bg-white p-10 w-fit mx-auto md:mr-10 rounded-lg'>
                        <img className='mx-auto w-[250px]' src={image} alt=""/>
                    </div>
                    <div className='w-full'>
                        <div className='border-b-2 border-gray-300'>
                            <h1 className='font-bold text-[32px] text-center md:text-left'>{title}</h1>
                            <p className='text-gray-500 text-[20px] pb-5 text-center md:text-left'>Developed by <span className='font-bold text-[#9F62F2]'>{companyName}</span></p>
                        </div>
                        <div className='pt-5 flex flex-wrap md:flex-row'>
                            <div className='max-w-fit mx-auto lg:mx-10 md:-ml-0 lg:-ml-0'>
                                <div>
                                    <img src={downimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Downloads</h2>
                                </div>
                                <div className='md:-mt-2'>
                                    <p className='md:text-[40px] text-2xl font-bold'>{downloads}</p>
                                </div>
                            </div>
                            <div className='max-w-fit mx-auto lg:mx-10'>
                                <div>
                                    <img src={ratingimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Average Ratings</h2>
                                </div>
                                <div className='md:-mt-2'>
                                    <p className='md:text-[40px] text-2xl font-bold'>{ratingAvg}</p>
                                </div>
                            </div>
                            <div className='max-w-fit mx-auto lg:mx-10'>
                                <div>
                                    <img src={reviwimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Total Reviews</h2>
                                </div>
                                <div className='md:-mt-2'>
                                    <p className='md:text-[40px] text-2xl font-bold'>{reviews}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-60 md:w-auto mx-auto mt-5 md:mt-0'>
                            <button onClick={() => {handleSetData(appDatas), handleChackLoleData()}} className='btn w-65 p-6 border-0 bg-[#00D390] font-semibold text-white text-[17px] mt-3'>{appIntalled ? 'Intalled' : `Installed Now (${size} MB)`}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-2 mt-10 mb-10 border-gray-300'></div>
            <div className="bg-white rounded-lg shadow">
                <h1 className='text-2xl font-semibold ml-13 py-5'>Ratings</h1>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={ratings} layout="vertical" margin={{ top: 20, right: 40, left: 40, bottom: 20 }} barCategoryGap={15}>
                        <CartesianGrid strokeDasharray="3 3" stroke='none' />
                        <XAxis axisLine={false} tickLine={false} padding={{left: 20 }}  type="number" margin={{right: 40}}/>
                        <YAxis axisLine={false} tickLine={false} padding={{bottom: 20 }} dataKey="name" type="category"/>
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8800" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='border-b-2 mt-10 mb-10 border-gray-300'></div>
            <div>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;