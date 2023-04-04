import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css"
import "../assets/css/custom.css"

const LayoutAuthentication = () => {
    return (
        <>
            {/* <link href="../assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
            <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            
            <link href="../assets/css/custom.css" rel="stylesheet" type="text/css" /> */}
            <link href="../assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
            <div className="home-btn d-none d-sm-block">
                <a href="index.html"><i className="mdi mdi-home-variant h2 text-white"></i></a>
            </div>
            <div>
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div className="w-100">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">

                                            <Outlet />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="authentication-bg d-flex align-items-center">
                                {/* <div className="bg-overlay"></div> */}
                                <img className='img-fluid' style={{ height: "100%", width: "100%" }} src="/assets/images/thegioididong.jpg" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default LayoutAuthentication