import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const LayoutAuthentication = () => {
    return (
        <>
            <link href="../assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
            <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            <link href="../assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
            <link href="../assets/css/custom.css" rel="stylesheet" type="text/css" />

            <div class="home-btn d-none d-sm-block">
                <a href="index.html"><i class="mdi mdi-home-variant h2 text-white"></i></a>
            </div>
            <div>
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div class="w-100">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">

                                            <Outlet />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="authentication-bg d-flex align-items-center">
                                {/* <div class="bg-overlay"></div> */}
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