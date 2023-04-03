import React from 'react'

const Login = () => {
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
                    <form class="form-horizontal" action="index.html">

                        <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-user-2-line auti-custom-input-icon"></i>
                            <label for="username">Tên tài khoản</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter username" />
                        </div>

                        <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-lock-2-line auti-custom-input-icon"></i>
                            <label for="userpassword">Mật khẩu</label>
                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
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