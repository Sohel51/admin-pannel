
import ProductHeader from './shared/ProductHeader'

const AddProduct = () => {

    return (
        <div className="add_product">
            <div className='product_header'>
                <ProductHeader></ProductHeader>
            </div>
            <div className="add_new_product">
                <form>
                    <div className="data_field d-flex flex-wrap gap-5">
                        <div className="product_name">
                            <label>User ID</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>First Name</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>Last Name</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>Mobile</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>Email</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label> Portfolio</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>Address</label><br />
                            <input type="text" />
                        </div>
                        <div className="product_name">
                            <label>Father Name</label><br />
                            <input type="text" />
                        </div>
                    </div>
                    {/* <button onClick={handleSubmit} type="button" className="btn btn-primary">Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default AddProduct