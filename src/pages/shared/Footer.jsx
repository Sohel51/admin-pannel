import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const eva = require('eva-icons');

const Footer = () => {
    useEffect(() => {
        eva.replace()
    }, [])

    return (
        <div className='footer_container'>
            <div className="footer">
                <div className="nav">
                    <ul className='d-flex justify-content-center gap-5'>
                        <li><Link to='/profile'>
                            <div className="bottom_link_item">
                                <i data-eva="person-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                                <p>Profile</p>
                            </div>
                        </Link></li>
                        <li><Link to='/'>
                            <div className="bottom_link_item">
                                <i data-eva="home-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link></li>
                        <li><Link to='/settings'>
                            <div className="bottom_link_item">
                                <i data-eva="settings-2-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                                <p>Settings</p>
                            </div>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer