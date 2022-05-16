import { dashboard, s3 } from '../config/api/apiEndpoints';
import axiosSettingNeeds from '../config/api/axiosSettingNeeds';

export const addFileToS3API = payload => axiosSettingNeeds.post(s3, payload);

export const deleteFileFromS3API = fileName => axiosSettingNeeds.delete(`${s3}/${fileName}`);

export const countEntitiesAPI = () => axiosSettingNeeds.get(dashboard);
