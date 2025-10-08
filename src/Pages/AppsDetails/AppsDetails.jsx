import { useEffect, useState } from 'react';
import AppsNotFound from '../Apps/AppsNotFound/AppsNotFound';
import { useParams } from 'react-router';
import { useAppsJsonData } from '../../Hoks/DataFetch';
import downimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import reviwimg from '../../assets/icon-review.png'

const AppsDetails = () => {
    const {appsData} = useAppsJsonData()
    const [appDatas, setAppDatas] = useState([])
    const {image, title, companyName, size, reviews, ratingAvg, downloads} = appDatas
    const {id} = useParams()

    const idNum = Number(id)

    useEffect(() => {
        const singleAppData = appsData.find(singData => singData.id === idNum)
        if(singleAppData){
            setAppDatas(singleAppData)
        }
    },[appsData, idNum])
    
    const appsId = appsData.find(data => data.id === idNum)
    if (!appsId) {
        return <AppsNotFound />;
    }


    return (
        <div className='max-w-[1700px] mx-auto py-20'>
            <div>
                <div className='flex justify-center items-center space-x-10'>
                    <div className='bg-white p-10 w-fit rounded-lg'>
                        <img src={image} alt="" width={'250px'} />
                    </div>
                    <div className='w-full'>
                        <div className='border-b-2 border-gray-300'>
                            <h1 className='font-bold text-[32px]'>{title}</h1>
                            <p className='text-gray-500 text-[20px] pb-5'>Developed by {companyName}</p>
                        </div>
                        <div className='pt-5 flex space-x-20'>
                            <div>
                                <div>
                                    <img src={downimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Downloads</h2>
                                </div>
                                <div className='-mt-3'>
                                    <p className='text-[40px] font-bold'>{downloads}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={ratingimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Average Ratings</h2>
                                </div>
                                <div className='-mt-3'>
                                    <p className='text-[40px] font-bold'>{ratingAvg}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={reviwimg} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-gray-500 font-semibold'>Total Reviews</h2>
                                </div>
                                <div className='-mt-3'>
                                    <p className='text-[40px] font-bold'>{reviews}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='btn w-60 p-6 border-0 bg-[#00D390] font-semibold text-white text-[17px] mt-3'>Install Now ({size} MB)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;