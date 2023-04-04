import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CreateProductCategoryManage } from '../../apis/productCategoryApiService';
import { ToastContainer, toast } from 'react-toastify';

const ProductCategoryCreate = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        console.log("hehe")
        event.preventDefault();
        const request = {
            "id": 1,
            "parent_product_category_id": null,
            "product_category_group_id": null,
            "name": name,
            "display_order": 0,
            "published": 1,
            "badge_icon": null,
            "image": null,
            "deleted": 0,
            "created_at": null,
            "updated_at": null
        }
        const res = CreateProductCategoryManage(request);
        toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
            autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
            hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
            closeOnClick: true, // Đóng thông báo khi click vào nó
            pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
            draggable: true, // Cho phép kéo thông báo
            progress: undefined // Không sử dụng thanh tiến trình tích lũy
        });

        navigate("/product-category");
        // if (res?.statusCode === 201) {

        // }
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <div className="row">
                <div className="col-12">

                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">Loại sản phẩm</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Loại sản phẩm</a></li>
                                <li className="breadcrumb-item active">Thêm loại sản phẩm</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Loại sản phẩm cha</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Nhóm loại sản phẩm</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Tên loại sản phẩm</label>
                                    <div class="col-md-10">
                                        <input value={name} onChange={(e) => handleChangeName(e)} class="form-control" type="text" id="example-text-input" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Độ ưu tiên</label>
                                    <div class="col-md-10">
                                        <input class="form-control" type="text" id="example-text-input" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Ảnh đại diện</label>
                                    <div class="col-md-10" style={{ maxWidth: "300px" }}>
                                        <input type="file" class="custom-file-input" id="customFile" />
                                        <label style={{ margin: "0 12px" }} class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="example-text-input" class="col-md-2 col-form-label">Ảnh minh họa</label>
                                    <div class="col-md-10" style={{ maxWidth: "300px" }}>
                                        <input type="file" class="custom-file-input" id="customFile" />
                                        <label style={{ margin: "0 12px" }} class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>
                                <div class="custom-control custom-switch mb-2" dir="ltr">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked />
                                    <label class="custom-control-label" for="customSwitch1">Hoạt động</label>
                                </div>
                                <div class="custom-control custom-switch mb-2 d-flex justify-content-end" dir="ltr">
                                    <button type="submit" class="btn btn-success waves-effect waves-light">Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCategoryCreate