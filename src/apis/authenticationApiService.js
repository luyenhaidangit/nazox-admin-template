import axios from '../helpers/Apis/axiosCustomize';

const Authentication = (userName, password) => {
    return axios.post(`api/User/Login?UserName=${userName}&Password=${password}`);
}

export {
    Authentication
};