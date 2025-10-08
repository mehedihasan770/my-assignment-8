import logoimg from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white space-y-5 p-10 lg:px-35 lg:py-15 flex flex-col lg:flex-row justify-between'>
                <div className='max-w-96'>
                    <p className="text-xl font-bold text-[#9F62F2]"><img className="inline-block" src={logoimg} alt="" width={'40px'}/>HERO.IO</p>
                    <p className='text-gray-400'>Hero.io is your all-in-one creative hub: discover outstanding mobile apps, delve into inspiring stories, and explore sleek websites. We're passionate about crafting digital experiences that delight, inform, and empower users. Join our community — your next adventure begins here.</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>Services</h1>
                    <ul className='text-gray-500 flex flex-col space-y-3'>
                        <a href=""><li>App Solutions</li></a>
                        <a href=""><li>Web Experience</li></a>
                        <a href=""><li>Brand Identity</li></a>
                        <a href=""><li>Support & Update</li></a>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>About</h1>
                    <ul className='text-gray-500 flex flex-col space-y-3'>
                        <a href=""><li>Who We Are</li></a>
                        <a href=""><li>Our Mission</li></a>
                        <a href=""><li>Our Vision</li></a>
                        <a href=""><li>Our Story</li></a>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>Connect With Us</h1>
                    <ul className='text-gray-500 flex flex-col space-y-3'>
                        <a href=""><li>Follow Us —</li></a>
                        <a href=""><li>Join Our Community —</li></a>
                        <a href=""><li>Let’s Collaborate —</li></a>
                        <a href=""><li>Our Story —</li></a>
                    </ul>
                </div>
            </div>
            <div className='bg-black text-white'>
                <div className='lg:max-w-[1700px] mx-auto lg:border-t-1 border-gray-500 py-5 border-0'>
                    <p className='text-center text-gray-500 font-semibold block'>Copyright © 2025 - All right reserved</p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;