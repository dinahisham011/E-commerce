import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta"
const OurStore = () => {
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className='sub-title'>Availabilty</h5>
                                    <div>
                                        <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='' />
                                        <label className='form-check-label' htmlfor="">
                                            In Stock (1)
                                        </label>
                                    </div>
                                        <div className='form-check'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=''
                                                id='' />
                                            <label className='form-check-label' htmlfor="">
                                                Out Of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlfor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlfor="floatingInpu01t">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-1' />
                                        <label className='form-check-label' htmlfor="color-1">
                                            S (2)
                                        </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='color-2' />
                                        <label className='form-check-label' htmlfor="color-2">
                                            M (2)
                                        </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Products Tag
                                </h3>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Random Products
                                </h3>
                            </div>
                        </div>
                        <div className='col-9'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStore