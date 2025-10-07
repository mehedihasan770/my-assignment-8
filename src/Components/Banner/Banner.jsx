import playimg from '../../assets/Group (1).png'
import appleimg from '../../assets/fi_5977575.png'
import heroimg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center justify-center space-y-5'>
                <div>
                    <h1 className='text-[20px] md:text-[50px] lg:text-[72px] font-bold text-center'>We Build <br className='hidden md:block'/><span className='text-[#8755EA]'>Productive</span> Apps</h1>
                </div>
                <div className='text-center text-gray-600 md:text-[18px]'>
                    <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br className='hidden md:block'/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-between space-x-5'>
                    <button className='btn px-8 text-nowrap flex-1'><img src={playimg} alt="" />Google Play</button>
                    <button className='btn px-8 text-nowrap flex-1'><img className='text-black' src={appleimg} alt="" />App Store</button>
                </div>
                <div>
                    <img src={heroimg} alt="" />
                </div>
            </div>
            <div className='rounded-xl lg:rounded-none bg-gradient-to-br to-[#9F62F2] from-[#6530E4] flex flex-col space-y-10 justify-center items-center py-15 text-white'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row space-y-7 md:space-x-24 lg:space-x-50'>
                    <div className='text-center'>
                        <p className='text-gray-300'>Total Downloads</p>
                        <h1 className='text-[64px] font-bold'>29.6M</h1>
                        <p className='text-gray-300'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-300'>Total Reviews</p>
                        <h1 className='text-[64px] font-bold'>906K</h1>
                        <p className='text-gray-300'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-300'>Active Apps</p>
                        <h1 className='text-[64px] font-bold'>132+</h1>
                        <p className='text-gray-300'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;