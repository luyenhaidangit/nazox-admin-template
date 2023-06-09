import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import $ from "jquery"
import "metismenu"
import "../assets/css/custom.css"

const LeftSideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Kích hoạt plugin metisMenu
        $("#side-menu").metisMenu();

        // Lấy ra đường dẫn của trang hiện tại
        let currentUrl = location.pathname;

        if (currentUrl === "/product-categories" || currentUrl === "/product-categories/create") {
            currentUrl = "/product-categories";
        }

        // Xóa hết class active của các phần tử trước đó
        $("#sidebar-menu a").removeClass("active mm-active");
        $("#sidebar-menu li").removeClass("mm-active mm-show");
        $("#sidebar-menu ul").removeClass("mm-show");

        // Thêm class active và mm-active cho phần tử ứng với trang hiện tại
        $("#sidebar-menu a[link='" + currentUrl + "']").addClass("active").parent().addClass("mm-active").parent().addClass("mm-show").parent().addClass("mm-active").children('a').addClass('mm-active');
    }, [location]);

    return (
        <>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Menu</li>
                            <li>
                                <a link="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} href="/#" className="waves-effect">
                                    <i className="ri-dashboard-line"></i><span className="badge badge-pill badge-success float-right">3</span>
                                    <span>Trang điều khiển</span>
                                </a>
                            </li>

                            <li>
                                <a href="/#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect cursor-pointer">
                                    <i className="fas fa-cubes"></i>
                                    <span>Danh mục</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className='pointer cursor-pointer' onClick={() => navigate("/product-categories")}><a link="/product-categories" href="/#" onClick={(e) => e.preventDefault()} >Loại sản phẩm</a></li>
                                    <li className='cursor-pointer' onClick={() => navigate("/brand")}><a link="/brand" href="/#">Nhãn hiệu</a></li>
                                    <li className='cursor-pointer' onClick={() => navigate("/product")}><a link="/product" href="/#">Sản phẩm</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="apps-chat.html" className=" waves-effect">
                                    <i className="ri-chat-1-line"></i>
                                    <span>Chat</span>
                                </a>
                            </li>


                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Email</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Read Email</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="apps-kanban-board.html" className=" waves-effect">
                                    <i className="ri-artboard-2-line"></i>
                                    <span>Kanban Board</span>
                                </a>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-layout-3-line"></i>
                                    <span>Layouts</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="layouts-horizontal.html">Horizontal</a></li>
                                    <li><a href="layouts-light-sidebar.html">Light Sidebar</a></li>
                                    <li><a href="layouts-compact-sidebar.html">Compact Sidebar</a></li>
                                    <li><a href="layouts-icon-sidebar.html">Icon Sidebar</a></li>
                                    <li><a href="layouts-boxed.html">Boxed Layout</a></li>
                                    <li><a href="layouts-preloader.html">Preloader</a></li>
                                </ul>
                            </li>

                            <li className="menu-title">Pages</li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-account-circle-line"></i>
                                    <span>Authentication</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="auth-login.html">Login</a></li>
                                    <li><a href="auth-register.html">Register</a></li>
                                    <li><a href="auth-recoverpw.html">Recover Password</a></li>
                                    <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-profile-line"></i>
                                    <span>Utility</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="pages-starter.html">Starter Page</a></li>
                                    <li><a href="pages-maintenance.html">Maintenance</a></li>
                                    <li><a href="pages-comingsoon.html">Coming Soon</a></li>
                                    <li><a href="pages-timeline.html">Timeline</a></li>
                                    <li><a href="pages-faqs.html">FAQs</a></li>
                                    <li><a href="pages-pricing.html">Pricing</a></li>
                                    <li><a href="pages-404.html">Error 404</a></li>
                                    <li><a href="pages-500.html">Error 500</a></li>
                                </ul>
                            </li>

                            <li className="menu-title">Components</li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-pencil-ruler-2-line"></i>
                                    <span>UI Elements</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="ui-alerts.html">Alerts</a></li>
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-cards.html">Cards</a></li>
                                    <li><a href="ui-carousel.html">Carousel</a></li>
                                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                    <li><a href="ui-grid.html">Grid</a></li>
                                    <li><a href="ui-images.html">Images</a></li>
                                    <li><a href="ui-lightbox.html">Lightbox</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                    <li><a href="ui-roundslider.html">Round Slider</a></li>
                                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                                    <li><a href="ui-sweet-alert.html">Sweet Alerts</a></li>
                                    <li><a href="ui-tabs-accordions.html">Tabs & Accordions</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-video.html">Video</a></li>
                                    <li><a href="ui-general.html">General</a></li>
                                    <li><a href="ui-rating.html">Rating</a></li>
                                    <li><a href="ui-notifications.html">Notifications</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="waves-effect">
                                    <i className="ri-eraser-fill"></i>
                                    <span className="badge badge-pill badge-danger float-right">6</span>
                                    <span>Forms</span>
                                </a>
                                <ul className="sub-menu" href="/#">
                                    <li><a href="form-elements.html">Elements</a></li>
                                    <li><a href="form-validation.html">Validation</a></li>
                                    <li><a href="form-advanced.html">Advanced Plugins</a></li>
                                    <li><a href="form-editors.html">Editors</a></li>
                                    <li><a href="form-uploads.html">File Upload</a></li>
                                    <li><a href="form-xeditable.html">X-editable</a></li>
                                    <li><a href="form-wizard.html">Wizard</a></li>
                                    <li><a href="form-mask.html">Mask</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-table-2"></i>
                                    <span>Tables</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="tables-basic.html">Basic Tables</a></li>
                                    <li><a href="tables-datatable.html">Data Tables</a></li>
                                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                                    <li><a href="tables-editable.html">Editable Table</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-bar-chart-line"></i>
                                    <span>Charts</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="charts-apex.html">Apexcharts</a></li>
                                    <li><a href="charts-chartjs.html">Chartjs</a></li>
                                    <li><a href="charts-flot.html">Flot</a></li>
                                    <li><a href="charts-knob.html">Jquery Knob</a></li>
                                    <li><a href="charts-sparkline.html">Sparkline</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-brush-line"></i>
                                    <span>Icons</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="icons-remix.html">Remix Icons</a></li>
                                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                                    <li><a href="icons-dripicons.html">Dripicons</a></li>
                                    <li><a href="icons-fontawesome.html">Font awesome 5</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-map-pin-line"></i>
                                    <span>Maps</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="maps-google.html">Google Maps</a></li>
                                    <li><a href="maps-vector.html">Vector Maps</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" className="has-arrow waves-effect">
                                    <i className="ri-share-line"></i>
                                    <span>Multi Level</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="/#">Level 1.1</a></li>
                                    <li><a href="/#" className="has-arrow">Level 1.2</a>
                                        <ul className="sub-menu">
                                            <li><a href="/#">Level 2.1</a></li>
                                            <li><a href="/#">Level 2.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LeftSideBar;
