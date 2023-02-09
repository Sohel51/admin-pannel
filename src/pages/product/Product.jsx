import React, { useEffect } from 'react'
import Header from '../shared/Header'
import ProductHeader from './shared/ProductHeader'
const eva = require('eva-icons');

const Product = () => {
  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <>
      <Header></Header>
      <div className="product_details border border-primary">
        <div className="product_header">
          <ProductHeader></ProductHeader>
        </div>
        <div className="product_table_card">
          <table className='justify-content-between'>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Status</th>
              <th>Available</th>
              <th>Details</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Griffin</td>
              <td>Active</td>
              <td>100</td>
              <td>Lorem, ipsum.</td>
              <td>$100</td>
              <td>
                <div className="actions">
                  <i data-eva="trash-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="edit-2-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="plus-square-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                  <i data-eva="question-mark-circle-outline" data-eva-fill="white" data-eva-height="25px" data-eva-width="25px"></i>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Product