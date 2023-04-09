import React from 'react'

export const Header = () => {
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">

                        <div className="navbar-brand-box">
                            <span href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="/assets/images/logo-sm-dark.png" alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-dark.png" alt="" height="20" />
                                </span>
                            </span>

                            <span href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="/assets/images/logo-sm-light.png" alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-light.png" alt="" height="20" />
                                </span>
                            </span>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>

                        <div className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="ri-search-line"></span>
                            </div>
                        </div>

                        <div className="dropdown dropdown-mega d-none d-lg-block ml-2">
                            <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
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
                                                        <span>Lightbox</span>
                                                    </li>
                                                    <li>
                                                        <span>Range Slider</span>
                                                    </li>
                                                    <li>
                                                        <span>Sweet Alert</span>
                                                    </li>
                                                    <li>
                                                        <span>Rating</span>
                                                    </li>
                                                    <li>
                                                        <span>Forms</span>
                                                    </li>
                                                    <li>
                                                        <span>Tables</span>
                                                    </li>
                                                    <li>
                                                        <span>Charts</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14 mt-0">Applications</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <span>Ecommerce</span>
                                                    </li>
                                                    <li>
                                                        <span>Calendar</span>
                                                    </li>
                                                    <li>
                                                        <span>Email</span>
                                                    </li>
                                                    <li>
                                                        <span>Projects</span>
                                                    </li>
                                                    <li>
                                                        <span>Tasks</span>
                                                    </li>
                                                    <li>
                                                        <span>Contacts</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14 mt-0">Extra Pages</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <span>Light Sidebar</span>
                                                    </li>
                                                    <li>
                                                        <span>Compact Sidebar</span>
                                                    </li>
                                                    <li>
                                                        <span>Horizontal layout</span>
                                                    </li>
                                                    <li>
                                                        <span>Maintenance</span>
                                                    </li>
                                                    <li>
                                                        <span>Coming Soon</span>
                                                    </li>
                                                    <li>
                                                        <span>Timeline</span>
                                                    </li>
                                                    <li>
                                                        <span>FAQs</span>
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
                                                        <span>Lightbox</span>
                                                    </li>
                                                    <li>
                                                        <span>Range Slider</span>
                                                    </li>
                                                    <li>
                                                        <span>Sweet Alert</span>
                                                    </li>
                                                    <li>
                                                        <span>Rating</span>
                                                    </li>
                                                    <li>
                                                        <span>Forms</span>
                                                    </li>
                                                    <li>
                                                        <span>Tables</span>
                                                    </li>
                                                    <li>
                                                        <span>Charts</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-5">
                                                <div>
                                                    <img src="/assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block" />
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

                                <div className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="" src="/assets/images/flags/us.jpg" alt="Header Language" height="16" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">

                                <span className="dropdown-item notify-item">
                                    <img src="/assets/images/flags/spain.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Spanish</span>
                                </span>


                                <span className="dropdown-item notify-item">
                                    <img src="/assets/images/flags/germany.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">German</span>
                                </span>

                                <span className="dropdown-item notify-item">
                                    <img src="/assets/images/flags/italy.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Italian</span>
                                </span>


                                <span className="dropdown-item notify-item">
                                    <img src="/assets/images/flags/russia.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Russian</span>
                                </span>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ml-1">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-apps-2-line"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div className="px-lg-2">
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/github.png" alt="Github" />
                                                <span>GitHub</span>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                <span>Bitbucket</span>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/dribbble.png" alt="dribbble" />
                                                <span>Dribbble</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row no-gutters">
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/dropbox.png" alt="dropbox" />
                                                <span>Dropbox</span>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                <span>Mail Chimp</span>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <span className="dropdown-icon-item" href="#">
                                                <img src="/assets/images/brands/slack.png" alt="slack" />
                                                <span>Slack</span>
                                            </span>
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
                                    <span href="" className="text-reset notification-item">
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
                                    </span>
                                    <span href="" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="/assets/images/users/avatar-3.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <span href="" className="text-reset notification-item">
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
                                    </span>

                                    <span href="" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="/assets/images/users/avatar-4.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="p-2 border-top">
                                    <span className="btn btn-sm btn-link font-size-14 btn-block text-center">
                                        <i className="mdi mdi-arrow-right-circle mr-1"></i> View More..
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-2.jpg"
                                    alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ml-1">Kevin</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">

                                <span className="dropdown-item" href="#"><i className="ri-user-line align-middle mr-1"></i> Profile</span>
                                <span className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet</span>
                                <span className="dropdown-item d-block" href="#"><span className="badge badge-success float-right mt-1">11</span><i className="ri-settings-2-line align-middle mr-1"></i> Settings</span>
                                <span className="dropdown-item" href="#"><i className="ri-lock-unlock-line align-middle mr-1"></i> Lock screen</span>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item text-danger" href="#"><i className="ri-shut-down-line align-middle mr-1 text-danger"></i> Logout</span>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i className="ri-settings-2-line"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
