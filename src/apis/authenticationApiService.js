import axios from '../helpers/Apis/axiosCustomize';

const Authentication = (userName, password) => {
    return axios.post(`api/User/Login?UserName=${userName}&Password=${password}`);
}

const VerifyAdminToken = async (token) => {
    try {
        const response = await axios.get(`api/User/VerifyAdminToken?token=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export {
    Authentication,
    VerifyAdminToken
};