import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoryManage = (request) => {
    return axios.get('api/ProductCategory/Get', { params: request });
}

const DeleteProductCategoryMulti = (ids) => {
    return axios.delete('api/ProductCategory/DeleteMulti', {
        data: ids
    });
}

export {
    GetProductCategoryManage,
    DeleteProductCategoryMulti
};