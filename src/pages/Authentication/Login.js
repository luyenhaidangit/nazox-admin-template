import React, { useState } from 'react'
import { Authentication } from '../../apis/authenticationApiService'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // Hook
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Handle
    const handleLogin = async (event) => {
        event.preventDefault(); // ngăn chặn submit form mặc định

        try {
            let res = await Authentication(userName, password);
            console.log(res)
            if (res.statusCode === 200) {
                localStorage.setItem('token', res?.data?.token);
                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                    autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                    hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                    closeOnClick: true, // Đóng thông báo khi click vào nó
                    pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                    draggable: true, // Cho phép kéo thông báo
                    progress: undefined // Không sử dụng thanh tiến trình tích lũy
                });

                navigate("/");
            }

            else if (res?.statusCode === 401) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                    autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                    hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                    closeOnClick: true, // Đóng thông báo khi click vào nó
                    pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                    draggable: true, // Cho phép kéo thông báo
                    progress: undefined // Không sử dụng thanh tiến trình tích lũy
                });
            } else {
                toast.error('Xuất hiện lỗi trong quá trình thực hiện!', {
                    position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                    autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                    hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                    closeOnClick: true, // Đóng thông báo khi click vào nó
                    pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                    draggable: true, // Cho phép kéo thông báo
                    progress: undefined // Không sử dụng thanh tiến trình tích lũy
                });
            }
        } catch (e) {
            toast.error('Xuất hiện lỗi trong quá trình thực hiện!', {
                position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                closeOnClick: true, // Đóng thông báo khi click vào nó
                pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                draggable: true, // Cho phép kéo thông báo
                progress: undefined // Không sử dụng thanh tiến trình tích lũy
            });
            console.log(e)
        }

    };

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div>
                <div className="text-center">
                    <div>
                        <a href="index.html" className="logo"><img src="/assets/images/logo-dagstore.png" height="32" alt="logo" /></a>
                    </div>

                    <h4 className="font-size-18 mt-4">Xin chào !</h4>
                    <p className="text-muted">Đăng nhập để tiếp tục truy cập hệ thống Thegioididong!</p>
                </div>

                <div className="p-2 mt-5">
                    <form className="form-horizontal" onSubmit={(e) => handleLogin(e)}>

                        <div className="form-group auth-form-group-custom mb-4">
                            <i className="ri-user-2-line auti-custom-input-icon"></i>
                            <label htmlFor="username">Tên tài khoản</label>
                            <input value={userName} onChange={(e) => handleUsernameChange(e)} type="text" className="form-control" id="username" placeholder="Enter username" />
                        </div>

                        <div className="form-group auth-form-group-custom mb-4">
                            <i className="ri-lock-2-line auti-custom-input-icon"></i>
                            <label htmlFor="userpassword">Mật khẩu</label>
                            <input value={password} onChange={(e) => handlePasswordChange(e)} type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                            <label className="custom-control-label" htmlFor="customControlInline">Lưu đăng nhập</label>
                        </div>

                        <div className="mt-4 text-center">
                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Đăng nhập</button>
                        </div>

                        <div className="mt-4 text-center">
                            <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock mr-1"></i>Quên mật khẩu?</a>
                        </div>
                    </form>
                </div>

                <div className="mt-5 text-center">
                    <p>© 2023 FIT.UTEHY <i className="mdi mdi-heart text-danger"></i></p>
                </div>
            </div>
        </>
    )
}

export default Login