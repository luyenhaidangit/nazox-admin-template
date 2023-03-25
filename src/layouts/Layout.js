// Libraries
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Header } from './Header'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import $ from 'jquery';
import MetisMenu from '@metismenu/react'

// Components

const Layout = () => {
    return (
        <>

            <link href="../assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
            <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            <link href="../assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
            <link href="../assets/css/custom.css" rel="stylesheet" type="text/css" />

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