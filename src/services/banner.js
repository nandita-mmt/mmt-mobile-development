import { banner } from '../config/api/apiEndpoints';
import axiosSettingNeeds from '../config/api/axiosSettingNeeds';

export const getBannersAPI = () => axiosSettingNeeds.get(banner);

export const createBannerAPI = payload => axiosSettingNeeds.post(banner, payload);

export const updateBannerAPI = payload => axiosSettingNeeds.put(banner, payload);

export const deleteBannerAPI = id => axiosSettingNeeds.delete(`${banner}/${id}`);
