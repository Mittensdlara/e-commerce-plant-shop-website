import Image from "next/image";
import logo from "../img/logo.png";
import user from '../img/user.jpg'
import '../style/Hero.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-5">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a className="text-gray-400">Products</a>
            </li>
            <li>
              <a className="text-gray-400">Contacts</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <h1 className="logo-title font-extrabold text-xl lg:text-2xl">GREENMIND</h1>
          {/* <Image src={logo} /> */}

        </a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a className="text-gray-400">Products</a>
          </li>
          <li>
            <a className="text-gray-400">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:space-x-4 ">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <a className=" hidden lg:flex">
          {" "}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
