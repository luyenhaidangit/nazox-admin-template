import React, { useState } from 'react'
import { Authentication } from '../../apis/authenticationApiService'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // const Login = async (request) => {
    //     let res = await Authentication(request);
    //     console.log(res)
    // }

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault(); // ngăn chặn submit form mặc định

        let res = await Authentication(userName, password);
        console.log(res)
        if (res.statusCode === 200) {
            localStorage.setItem('accessToken', res?.data?.token);
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

        else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                closeOnClick: true, // Đóng thông báo khi click vào nó
                pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                draggable: true, // Cho phép kéo thông báo
                progress: undefined // Không sử dụng thanh tiến trình tích lũy
            });
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
                <div class="text-center">
                    <div>
                        <a href="index.html" class="logo"><img src="/assets/images/logo-dagstore.png" height="32" alt="logo" /></a>
                    </div>

                    <h4 class="font-size-18 mt-4">Xin chào !</h4>
                    <p class="text-muted">Đăng nhập để tiếp tục truy cập hệ thống Thegioididong!</p>
                </div>

                <div class="p-2 mt-5">
                    <form class="form-horizontal" onSubmit={(e) => handleLogin(e)}>

                        <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-user-2-line auti-custom-input-icon"></i>
                            <label for="username">Tên tài khoản</label>
                            <input value={userName} onChange={(e) => handleUsernameChange(e)} type="text" class="form-control" id="username" placeholder="Enter username" />
                        </div>

                        <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-lock-2-line auti-custom-input-icon"></i>
                            <label for="userpassword">Mật khẩu</label>
                            <input value={password} onChange={(e) => handlePasswordChange(e)} type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                        </div>

                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customControlInline" />
                            <label class="custom-control-label" for="customControlInline">Lưu đăng nhập</label>
                        </div>

                        <div class="mt-4 text-center">
                            <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Đăng nhập</button>
                        </div>

                        <div class="mt-4 text-center">
                            <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i>Quên mật khẩu?</a>
                        </div>
                    </form>
                </div>

                <div class="mt-5 text-center">
                    <p>© 2023 FIT.UTEHY <i class="mdi mdi-heart text-danger"></i></p>
                </div>
            </div>
        </>
    )
}

export default Login