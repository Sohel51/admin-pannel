import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Time from './shortComponent/Time'
const eva = require('eva-icons');

const Dashboard = () => {
    useEffect(() => {
        eva.replace()
    }, [])

    return (
        <div className="dashboard d-flex justify-content-between px-3">
            {/* Left-side */}
            <div className="left-part border border-primary d-flex justify-content-between">
                {/* left side (left) */}
                <div className="boxes-left  border border-primary">
                    {/* left side top */}
                    <div className="time p-2 border border-primary">
                        <Time></Time>
                    </div>
                    {/* left side mid */}
                    <div className="box2 p-2 border border-primary"></div>
                    {/* left side icon */}
                    <div className="box3 p-2 d-flex justify-content-between border border-primary">
                        <div className="short-box border border-primary">
                            <i data-eva="paper-plane-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box border border-primary">
                            <i data-eva="paper-plane-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box border border-primary">
                            <i data-eva="paper-plane-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box border border-primary">
                            <i data-eva="paper-plane-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                    </div>
                </div>
                {/* From left side (right sight) */}
                <div className="boxes-right justify-content-between">
                    <div className="box box-md  p-2 border border-primary">
                        <h2 className='ammount'>1.8M</h2>
                        <i data-eva="paper-plane-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                        <p>Here</p>
                        <p className='text-primary'>99%</p>
                    </div>
                    <div className="box box-md  p-2 border border-primary"></div>
                    <div className="box box-md  p-2 border border-primary"></div>
                    <div className="box box-md  p-2 border border-primary"></div>
                </div>
            </div>

            {/* Right side */}
            <div className="right-part border border-primary">
                <div className="short-links d-flex flex-wrap ">
                    <Link to="/products" className="box box-lg border border-primary p-2">
                        <i data-eva="shopping-bag-outline" data-eva-fill="white" data-eva-height="60px" data-eva-width="60px"></i>
                        <div className="label">
                            <h2>Products List</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Link>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                    <a className="box box-lg border border-primary p-2"></a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard