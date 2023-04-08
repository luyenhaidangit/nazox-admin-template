// ASP.NET Core
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { VerifyAdminToken } from '../../apis/authenticationApiService';

// const PrivateRoute = () => {
//     const isAuthenticated = !!localStorage.getItem('token'); // determine if authorized, from context or however you're doing it
//     const hasAccess = VerifyAdminToken(localStorage.getItem('token'));

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/dang-nhap" />;
// }

// export default PrivateRoute;

// Laravel
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { VerifyAdminToken } from '../../apis/authenticationApiService';

const PrivateRoute = () => {
    // const isAuthenticated = !!localStorage.getItem('token'); // determine if authorized, from context or however you're doing it
    // const hasAccess = VerifyAdminToken(localStorage.getItem('token'));

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/dang-nhap" />;
    return <Outlet />;
}

export default PrivateRoute;