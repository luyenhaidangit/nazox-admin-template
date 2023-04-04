import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const WithAuth = (WrappedComponent, allowedRoles) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('admin');

    useEffect(() => {
        // kiểm tra trạng thái đăng nhập và quyền truy cập của người dùng
        // và cập nhật trạng thái isAuthenticated và userRole tương ứng
    }, []);

    const AuthenticatedComponent = (props) => {
        // nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
        if (!isAuthenticated) {
            return <Navigate to='/dang-nhap' replace />;
        }

        // nếu người dùng không có quyền truy cập, hiển thị thông báo lỗi hoặc chuyển hướng đến trang lỗi
        if (allowedRoles && !allowedRoles.includes(userRole)) {
            return <Navigate to='/dang-nhap' replace />;
            // hoặc return <Navigate to='/error' replace />;
        }

        // nếu người dùng đã đăng nhập và có quyền truy cập, hiển thị component được bao bọc
        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default WithAuth;
