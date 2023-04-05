import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CreateProductCategoryManage } from '../../apis/productCategoryApiService';
import { ToastContainer, toast } from 'react-toastify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { GetProductCategoryParentAndGroupSelectFilter } from '../../apis/productCategoryApiService';
import "../../assets/css/custom.css"
import NoOptionsMessage from '../../components/Select/NoOptionsMessage';
import { UploadFile } from '../../apis/fileApiService';
import { CreateProductCategory } from '../../apis/productCategoryApiService';
import 'react-toastify/dist/ReactToastify.css';

const ProductCategoryCreate = () => {
    const navigate = useNavigate();
    const [optionParentProductCategory, setOptionParentProductCategory] = useState([]);
    const [parentProductCategoryId, setParentProductCategory] = useState(null);
    const [optionProductCategoryGroup, setOptionProductCategoryGroup] = useState([]);
    const [productCategoryGroupId, setProductCategoryGroupId] = useState(null);
    const [name, setName] = useState('');
    const [displayOrder, setDisplayOrder] = useState(0);
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [badgeIcon, setBadgeIcon] = useState(null);
    const [badgeIconFile, setBadgeIconFile] = useState(null);
    const [published, setPublished] = useState(true);

    // Property
    // ParentId
    const fetchParentProductCateogory = async (name) => {
        let res = await GetProductCategoryParentAndGroupSelectFilter(name);
        setOptionParentProductCategory(res);
    }

    const handleChangeOptionParentProductCategoryId = (value) => {
        fetchParentProductCateogory(value);
    }

    const handleChangeParentProductCategoryId = (e) => {
        setParentProductCategory(e.value);
    }

    // GroupId
    const fetchProductCateogoryGroup = async (name) => {
        let res = await GetProductCategoryParentAndGroupSelectFilter(name);
        setOptionProductCategoryGroup(res);
    }

    const handleChangeOptionProductCategoryGroup = (value) => {
        fetchProductCateogoryGroup(value);
    }

    const handleChangeProductCategoryGroupId = (e) => {
        setProductCategoryGroupId(e.value);
    }
    // Name
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    // DisplayOrder
    const handleKeyPressNumber = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Check if the key pressed is a number or a backspace/delete key
        if (/[^0-9]/.test(keyValue) && ![8, 46].includes(keyCode)) {
            event.preventDefault();
        }
    };

    const handleChangeDisplayOrder = (event) => {
        setDisplayOrder(+event.target.value);
    };

    // Image
    const handleChangeImage = (e) => {
        setImage(e.target.files[0].name);
        setImageFile(e.target.files[0]);
    }

    const handleChangeBadgeIcon = (e) => {
        setBadgeIcon(e.target.files[0].name);
        setBadgeIconFile(e.target.files[0]);
    }
    // Published
    function handleChangePublished(event) {
        setPublished(event.target.checked);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataImage = new FormData();
        formDataImage.append("File", imageFile);
        formDataImage.append("Folder", "ProductCategory");
        const formDataBadgeIcon = new FormData();
        formDataBadgeIcon.append("File", badgeIconFile);
        formDataBadgeIcon.append("Folder", "ProductCategory");
        let image = null;
        let badgeIcon = null;
        if (imageFile) {
            image = await UploadFile(formDataImage);
        }

        if (badgeIconFile) {
            badgeIcon = await UploadFile(formDataBadgeIcon);
        }

        const request = {
            parentProductCategoryId: parentProductCategoryId,
            productCategoryGroupId: productCategoryGroupId,
            name: name,
            displayOrder: displayOrder,
            image: image,
            badgeIcon: badgeIcon,
            published: published
        }

        const res = await CreateProductCategory(request);
        console.log(res);
        if (res.statusCode === 201) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT, // Vị trí hiển thị của thông báo
                autoClose: 3000, // Thời gian tự động đóng thông báo (đơn vị là miliseconds)
                hideProgressBar: false, // Ẩn hoặc hiển thị thanh tiến trình
                closeOnClick: true, // Đóng thông báo khi click vào nó
                pauseOnHover: true, // Tạm dừng thời gian tự động đóng khi hover chuột vào thông báo
                draggable: true, // Cho phép kéo thông báo
                progress: undefined // Không sử dụng thanh tiến trình tích lũy
            });
            navigate("/product-categories")
        } else {
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
    }

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
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="nav nav-tabs nav-tabs-custom d-inline-flex mb-3"
                            >
                                <Tab eventKey="home" title="Thông tin">
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Loại sản phẩm cha</label>
                                            <div class="col-md-10">
                                                <div style={{ width: "300px" }} className="mr-3">
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        components={{ NoOptionsMessage }}
                                                        isSearchable
                                                        options={optionParentProductCategory}
                                                        placeholder='Loại sản phẩm cha'
                                                        onInputChange={(value) => handleChangeOptionParentProductCategoryId(value)}
                                                        onChange={(e) => handleChangeParentProductCategoryId(e)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Nhóm loại sản phẩm</label>
                                            <div class="col-md-10">
                                                <div style={{ width: "300px" }} className="mr-3">
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        components={{ NoOptionsMessage }}
                                                        isSearchable
                                                        options={optionProductCategoryGroup}
                                                        placeholder='Nhóm loại sản phẩm'
                                                        onInputChange={(value) => handleChangeOptionProductCategoryGroup(value)}
                                                        onChange={(e) => handleChangeProductCategoryGroupId(e)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Tên loại sản phẩm</label>
                                            <div class="col-md-10">
                                                <input style={{ width: "300px" }} value={name} onChange={(e) => handleChangeName(e)} class="form-control" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Độ ưu tiên</label>
                                            <div class="col-md-10">
                                                <input value={displayOrder} onChange={(e) => handleChangeDisplayOrder(e)} onKeyPress={(e) => handleKeyPressNumber(e)} style={{ width: "300px" }} class="form-control" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Ảnh đại diện</label>
                                            <div class="col-md-10" style={{ maxWidth: "300px" }}>
                                                <input onChange={(e) => handleChangeImage(e)} type="file" class="custom-file-input" id="customFile1" />
                                                <label style={{ margin: "0 12px" }} class="custom-file-label" for="customFile1">
                                                    {imageFile !== null ? imageFile.name : 'Chọn file'}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-md-2 col-form-label">Ảnh minh họa</label>
                                            <div class="col-md-10" style={{ maxWidth: "300px" }}>
                                                <input onChange={(e) => handleChangeBadgeIcon(e)} type="file" class="custom-file-input" id="customFile" />
                                                <label style={{ margin: "0 12px" }} class="custom-file-label" for="customFile">
                                                    {badgeIconFile !== null ? badgeIconFile.name : 'Chọn file'}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="custom-control custom-switch mb-2" dir="ltr">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={(e) => handleChangePublished(e)} checked={published} />
                                            <label class="custom-control-label" for="customSwitch1">Hoạt động</label>
                                        </div>
                                        <div class="custom-control custom-switch mb-2 d-flex justify-content-end" dir="ltr">
                                            <button type="submit" class="btn btn-success waves-effect waves-light">Xác nhận</button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <>haha</>
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                    <>hihi</>
                                </Tab>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCategoryCreate