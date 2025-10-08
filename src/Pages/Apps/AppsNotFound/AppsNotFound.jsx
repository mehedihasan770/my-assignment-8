import { Link } from 'react-router';
import appnotefound from '../../../assets/App-Error.png'

const AppsNotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center text-center">
            <div className='space-y-5'>
                <div>
                    <img className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto' src={appnotefound} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                </div>
                <div>
                    <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
                <div className="w-fit mx-auto">
                    <Link to={'/apps'}><button className='btn w-45 p-6 border-0 bg-gradient-to-br to-[#9F62F2] from-[#6530E4] font-semibold text-white text-[17px]'>Go Back!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppsNotFound;