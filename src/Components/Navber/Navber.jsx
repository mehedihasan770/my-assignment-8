import { Link, NavLink } from "react-router";
import githubimg from '../../assets/Vector.png'
import logoimg from '../../assets/logo.png'

const Navber = () => {

  return (
    <div className="shadow-b-sm bg-base-100">
    <div className="navbar shadow-b-sm bg-base-100 max-w-[1700px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to={'/'} className={({isActive}) => isActive ? "text-[#894FED] border-2" : 'text-gray-500'}>Home</NavLink></li>
            <li><NavLink to={'/apps'} className={({isActive}) => isActive ? "text-[#894FED] border-2" : 'text-gray-500'}>Apps</NavLink></li>
            <li><NavLink to={'/installation'} className={({isActive}) => isActive ? "text-[#894FED] border-2" : 'text-gray-500'}>Installation</NavLink></li>
          </ul>
        </div>
        <Link to={'/'}><p className="text-xl font-bold text-[#9F62F2]"><img className="inline-block" src={logoimg} alt="" width={'40px'}/>HERO.IO</p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex space-x-5 px-1 font-semibold text-[17px]">
            <li><NavLink to={'/'} className={({isActive}) => isActive ? "text-[#894FED] border-b-2" : 'text-gray-500'}>Home</NavLink></li>
            <li><NavLink to={'/apps'} className={({isActive}) => isActive ? "text-[#894FED] border-b-2" : 'text-gray-500'}>Apps</NavLink></li>
            <li><NavLink to={'/installation'} className={({isActive}) => isActive ? "text-[#894FED] border-b-2" : 'text-gray-500'}>Installation</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/mehedihasan770" target="blank"><button className="btn bg-gradient-to-br to-[#9F62F2] from-[#6530E4] md:py-6 md:px-7 text-white"><img src={githubimg} alt="" />Contribute</button></a>
      </div>
    </div>
    </div>
  );
};

export default Navber;
