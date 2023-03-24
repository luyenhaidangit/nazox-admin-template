import React from 'react'
import Header from './Header'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const Layout = () => {
    return (
        <div id="layout-wrapper">
            <Header />
            {/* <LeftSideBar /> */}

            <RightSideBar />
        </div>
    )
}

export default Layout