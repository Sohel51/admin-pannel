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
            <div className="left-part d-flex justify-content-between">
                {/* left side (left) */}
                <div className="boxes-left ">
                    {/* left side top */}
                    <div className="time p-2">
                        <Time></Time>
                    </div>
                    {/* left side mid */}
                    <div className="box2 p-2"></div>
                    {/* left side bottom icon */}
                    <div className="box3 p-2 d-flex justify-content-between">
                        <div className="short-box gradient_v1">
                            <i data-eva="message-square-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box gradient_v2">
                            <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box gradient_v3">
                            <i data-eva="shopping-cart-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                        <div className="short-box gradient_v4">
                            <i data-eva="trash-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                            <div className='label'>Airoplane</div>
                        </div>
                    </div>
                </div>
                {/* From left side (right sight) */}
                <div className="boxes-right justify-content-between">
                    <div className="box box_gradient_v1 box-md  p-2">
                        <h2 className='ammount'>1.8M</h2>
                        <i data-eva="linkedin-outline" data-eva-fill="white" data-eva-height="40px" data-eva-width="40px"></i>
                        <p>Here</p>
                        <p className='parcent'>99%</p>
                    </div>
                    <div className="box box_gradient_v2 box-md  p-2"></div>
                    <div className="box box_gradient_v3 box-md  p-2"></div>
                    <div className="box box_gradient_v4 box-md  p-2"></div>
                </div>
            </div>

            {/* Right side */}
            <div className="right-part">
                <div className="short-links d-flex flex-wrap ">
                    <Link to="/products" className="box gv_1 box-lg">
                        <div className='box_icon'>
                            <div className="notify_icon">
                                566
                            </div>
                            <i data-eva="shopping-bag-outline" data-eva-fill="white" data-eva-height="50px" data-eva-width="50px"></i>
                        </div>
                        <div className="label">
                            <h2>Products List</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Link>
                    <a className="box gv_2 box-lg p-2"></a>
                    <a className="box gv_3 box-lg p-2"></a>
                    <a className="box gv_4 box-lg p-2"></a>
                    <a className="box gv_9 box-lg p-2"></a>
                    <a className="box gv_6 box-lg p-2"></a>
                    <a className="box gv_7 box-lg p-2"></a>
                    <a className="box gv_8 box-lg p-2"></a>
                    <a className="box gv_5 box-lg p-2"></a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard