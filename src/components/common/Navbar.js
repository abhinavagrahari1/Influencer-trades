import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/Logo Influencer Trades.png';

const Navbar =()=> {
  return (
    <div className="flex gap-5 justify-between px-20 py-5 w-full bg-gray-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center">
        <div className="flex gap-1" >
          <div className="flex overflow-hidden relative flex-col justify-center h-[66px] w-[132px]">
            <Link to='/'>
            <img
              loading="lazy"
              src={Logo}
              className="object-contain absolute inset-0 w-full h-full"
            />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-auto text-xl font-semibold leading-7 text-green-500 max-md:max-w-full">
        <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
          <div className="text-center">
          <NavLink to="/channels" activeClassName="active">Telegram Channels</NavLink></div>
          <div>
            <NavLink to="/faq">FAQs</NavLink></div>
          <div><NavLink to="/blog">Blog</NavLink></div>
          <div><NavLink to="/contact">Contact</NavLink></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;