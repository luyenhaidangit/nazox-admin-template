import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CreateProductCategoryManage } from '../../apis/productCategoryApiService';
import { ToastContainer, toast } from 'react-toastify';

const ProductCategoryEdit = () => {
    // Handle Page
    useEffect(() => {
        // const request = {
        //     pageIndex,
        //     pageSize
        // }
        // fetchProductCateogories(request);
    }, []);

    return (
        <div>ProductCategoryEdit</div>
    )
}

export default ProductCategoryEdit