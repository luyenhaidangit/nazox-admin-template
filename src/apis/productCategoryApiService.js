import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoryManage = (request) => {
    return axios.get('api/ProductCategory/Get', { params: request });
}

const GetProductCategoryParentAndGroupSelectFilter = (name) => {
    return axios.get(`api/ProductCategory/GetProductCategoryParentAndGroupSelectFilter?name=${name}`);
}

const CreateProductCategory = (request) => {
    return axios.post('api/ProductCategory/Create', request);
}

const DeleteProductCategoryManage = (id) => {
    return axios.delete(`api/ProductCategory/Delete?id=${id}`);
}

const DeleteProductCategoryMulti = (ids) => {
    return axios.delete('api/ProductCategory/DeleteMulti', {
        data: ids
    });
}

// Laravel
// const GetProductCategoryManage = (request) => {
//     return axios.get('api/product_categories/get', { params: request });
// }

const CreateProductCategoryManage = (request) => {
    return axios.post('api/product_categories/create', request);
}

// const DeleteProductCategoryManage = (id) => {
//     return axios.delete(`api/product_categories/delete/${id}`);
// }

// const DeleteProductCategoryMulti = (ids) => {
//     return axios.delete('api/ProductCategory/DeleteMulti', {
//         data: ids
//     });
// }

const GetProductCategoryById = (id) => {
    return axios.get(`api/product_categories/get_by_id/${id}`);
}



export {
    GetProductCategoryManage,
    DeleteProductCategoryMulti,
    CreateProductCategoryManage,
    DeleteProductCategoryManage,
    GetProductCategoryById,
    GetProductCategoryParentAndGroupSelectFilter,
    CreateProductCategory
};