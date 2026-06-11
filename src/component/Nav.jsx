import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChartBar, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    const favicon = document.getElementById("dynamicFavicon");

    if (favicon) {
      //fetch the school's favicon or logo
      favicon.href = '/shield.JPG';
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 this makes it gentle
    });
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-xl">Home</Link>
        </div>
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
    </div>
  )
}

export default Nav