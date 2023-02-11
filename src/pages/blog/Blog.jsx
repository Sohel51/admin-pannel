import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const eva = require('eva-icons');

const Blog = () => {
  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <div className='blog'>
      <div className="content">
        <div className="blog_boxes d-flex flex-wrap ">
          <Link to="/products" className="box gv_1 box-square">
            <div className="box_content">
              <div className="heading_content">
                <h2>0150</h2>
                <div className='border border-danger border-2'>
                  <i data-eva="shopping-bag-outline" data-eva-fill="white" data-eva-height="60px" data-eva-width="60px"></i>
                </div>
              </div>
              <div className="lebel">
                <p>Purple</p>
                <p>2.5%</p>
              </div>
            </div>
          </Link>
          <Link to="/blog" className="box gv_2 box-square">
          </Link>
          <a className="box gv_3 box-square"></a>
          <a className="box gv_4 box-square"></a>
          <a className="box gv_9 box-square"></a>
          <a className="box gv_6 box-square"></a>
          <a className="box gv_7 box-square"></a>
          <a className="box gv_8 box-square"></a>
          <a className="box gv_5 box-square"></a>
          <a className="box gv_1 box-square"></a>
          <a className="box gv_3 box-square"></a>
          <a className="box gv_4 box-square"></a>
          <a className="box gv_9 box-square"></a>
          <a className="box gv_6 box-square"></a>
          <a className="box gv_7 box-square"></a>
          <a className="box gv_8 box-square"></a>
        </div>
      </div>
    </div>
  )
}

export default Blog