import React from 'react'

const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">

                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm-dark.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="20" />
                            </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm-light.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="20" />
                            </span>
                        </a>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                        <i className="ri-menu-2-line align-middle"></i>
                    </button>


                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="ri-search-line"></span>
                        </div>
                    </form>

                    <div className="dropdown dropdown-mega d-none d-lg-block ml-2">
                        <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="false"
                            aria-expanded="false">
                            Mega Menu
                            <i className="mdi mdi-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-megamenu">
                            <div className="row">
                                <div className="col-sm-8">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5 className="font-size-14 mt-0">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Forms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14 mt-0">Applications</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Ecommerce</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Calendar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Email</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Projects</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Tasks</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14 mt-0">Extra Pages</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Light Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Compact Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Horizontal layout</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Maintenance</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">FAQs</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5 className="font-size-14 mt-0">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Forms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-5">
                                            <div>
                                                <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block d-lg-none ml-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-search-line"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-search-dropdown">

                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search ..." />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-none d-sm-inline-block">
                        <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img className="" src="assets/images/flags/us.jpg" alt="Header Language" height="16" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">


                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-1" height="12" /> <span
                                    className="align-middle">Spanish</span>
                            </a>


                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-1" height="12" /> <span
                                    className="align-middle">German</span>
                            </a>


                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-1" height="12" /> <span
                                    className="align-middle">Italian</span>
                            </a>


                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="mr-1" height="12" /> <span
                                    className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="ri-apps-2-line"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <div className="px-lg-2">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/github.png" alt="Github" />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                            <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                            <span>Dribbble</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="row no-gutters">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                            <span>Dropbox</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                            <span>Mail Chimp</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/slack.png" alt="slack" />
                                            <span>Slack</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="ri-fullscreen-line"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-notification-3-line"></i>
                            <span className="noti-dot"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#!" className="small"> View All</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{ maxHeight: "230px" }}>
                                <a href="" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="ri-shopping-cart-line"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-3.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">James Lemire</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">It will seem like simplified English.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="ri-checkbox-circle-line"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-4.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                    <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block user-dropdown">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-2.jpg" alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ml-1">Kevin</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">

                            <a className="dropdown-item" href="#"><i className="ri-user-line align-middle mr-1"></i> Profile</a>
                            <a className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet</a>
                            <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right mt-1">11</span><i
                                className="ri-settings-2-line align-middle mr-1"></i> Settings</a>
                            <a className="dropdown-item" href="#"><i className="ri-lock-unlock-line align-middle mr-1"></i> Lock screen</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="ri-shut-down-line align-middle mr-1 text-danger"></i>
                                Logout</a>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="ri-settings-2-line"></i>
                        </button>
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header