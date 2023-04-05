import axios from '../helpers/Apis/axiosCustomize';

const UploadFile = (form) => {
    return axios.post(`api/File/UploadImage`, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export {
    UploadFile
};