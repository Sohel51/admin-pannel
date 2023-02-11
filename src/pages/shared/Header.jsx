import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const eva = require('eva-icons');

const Header = () => {
  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <div className="header_container">
      <div className='header d-flex justify-content-between p-1'>
        <div className="back">
          <Link to=''>
            <i data-eva="arrow-back-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
          </Link>
        </div>
        <div className="title">
          <h2>Dashboard</h2>
        </div>
        <div className="profile d-flex justify-content-space-between">
          <div className="name">
            <h3>User</h3>
          </div>
          <div className="menu-toggle">
            <div className="dropdown">
              <button className="dropbtn">
                <i data-eva="layers-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
              </button>
              <div className="dropdown-content">
                <Link className='v1' to="/">Dashboard</Link>
                <Link className='v2' to="/profile">Profile</Link>
                <Link className='v3' to="/settings">Settings</Link>
                {/* <Link to="">Product</Link>
                <Link to="">Order</Link>
                <Link to="">User</Link>
                <Link to="">Blog</Link> */}
                <Link className='v4' to="">Log Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header