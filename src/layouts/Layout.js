// Libraries
import React from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer'
import { Header } from './Header'
import LeftSideBar from './LeftSideBar'
import "../assets/css/bootstrap.min.css"
import "../assets/css/icons.min.css"
import "../assets/css/app.css"
import "../assets/css/custom.css"
// import RightSideBar from './RightSideBar'
// import $ from 'jquery';
// import MetisMenu from '@metismenu/react'
// import { ToastContainer } from 'react-toastify'

// Components

const Layout = () => {
    return (
        <>
            <div id="layout-wrapper">

                <Header />


                <LeftSideBar />





                <div className="main-content">

                    <div className="page-content">
                        <div className="container-fluid">


                            <Outlet />


                        </div>
                    </div>



                    {/* <Footer /> */}
                </div>


            </div>

            {/* <RightSideBar /> */}

            <div className="rightbar-overlay"></div>

            {/* <script src="../assets/libs/jquery/jquery.min.js"></script>
            <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="../assets/libs/simplebar/simplebar.min.js"></script>
            <script src="../assets/libs/node-waves/waves.min.js"></script>
            <script src="../assets/js/app.js"></script> */}
        </>
    )
}

export default Layout