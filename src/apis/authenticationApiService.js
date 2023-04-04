import axios from '../helpers/Apis/axiosCustomize';

const Authentication = (userName, password) => {
    return axios.post(`api/User/Login?UserName=${userName}&Password=${password}`);
}

const VerifyAdminToken = (token) => {
    return axios.get(`api/User/VerifyAdminToken?token=${token}`);
}

export {
    Authentication,
    VerifyAdminToken
};