import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoryManage = (request) => {
    return axios.get('api/ProductCategory/Get', { params: request });
}

export {
    GetProductCategoryManage
};