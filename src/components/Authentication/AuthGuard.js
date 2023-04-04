import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = false;
    const hasPermission = false;
    if (!isAuthenticated || !hasPermission) {
        navigate('/dang-nhap', { replace: true });
        return null;
    }

    return children;
}

export default AuthGuard