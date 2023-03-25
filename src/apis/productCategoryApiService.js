import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoryManage = () => {
    return axios.get('api/ProductCategory/Get');
}

export {
    GetProductCategoryManage
};