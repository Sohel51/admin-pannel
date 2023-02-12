import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData.json'
import ProductHeader from './shared/ProductHeader'
const eva = require('eva-icons');

const Product = () => {
  const [showcanvus, setShowcanvus] = useState(false)
  const [fakeData, setFakeData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      eva.replace()
    }, 1);
  }, [])

  useEffect(() => {
    setFakeData(FakeData)
  }, [])

  return (
    <>
      <div className="list_products">
        {/* product headre */}
        <div className="product_header">
          <ProductHeader></ProductHeader>
        </div>
        <div className="table_data_main">
          {/* table head */}
          <div className="table_head d-flex justify-content-between">
            <div className="content d-flex justify-content-evenly gap-5">
              <h2>All Data</h2>
              <p>Selected- <span>2</span></p>
              <p>Clear</p>
              <p>Show</p>
            </div>
            <div className="searchbox">
              <input type="text" />
            </div>
            <div className="icon d-flex justify-content-evenly gap-4">
              <div className="create">
                <i data-eva="edit-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                Create
              </div>
              <i data-eva="list-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
            </div>
          </div>
          {/* table body */}
          <div className="product_table_card">
            <table className='justify-content-between'>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Available</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  fakeData.map(data => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.address.zipcode}</td>
                        <td>{data.email}</td>
                        <td>$100</td>
                        <td>
                          <div className="actions">
                            <div className="dropdown">
                              <button className="dropbtn">
                                <i data-eva="settings-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                              </button>
                              <div className="dropdown-content">
                                <a className='d-flex gap-3 items' onClick={() => setShowcanvus(true)} href="#">
                                  <i data-eva="eye-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                                  Quickview
                                </a>
                                <Link className='d-flex gap-3 items' to="">
                                  <i data-eva="eye-off-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                                  Details
                                </Link>
                                <Link className='d-flex gap-3 items' to="">
                                  <i data-eva="edit-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                                  Edit
                                </Link>
                                <Link className='d-flex gap-3 items' to="">
                                  <i data-eva="trash-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className={`my_canvus ${showcanvus && 'active'}`}>
            <div className="my_canvus_backdrop" onClick={() => setShowcanvus(false)}></div>
            <div className="my_canvus_body">
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
              <input type="text" className='form-control' />
            </div>
          </div>
          {/* table bottom */}
          <div className="table_bottom d-flex gap-5">
            <div className="pagination d-flex gap-3">
              <div className="icon">
                <i data-eva="arrow-back-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
              </div>
              <p>Previous</p>
              <p>1</p>
              <p>2</p>
              <p>Next</p>
              <div className="icon">
                <i data-eva="arrow-forward-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
              </div>
            </div>
            <div className="limitation d-flex gap-3">
              
              <p>Limit</p>
              <p>Total: <span>{fakeData.length}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product