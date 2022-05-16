import { career, careerform ,upload } from '../config/api/apiEndpoints';
import axiosMagicMind , { axiosMagicMindFileUpload } from '../config/api/axiosMagicMind';

export const getCareerAPI = () => axiosMagicMind.get(career);

export const createCareerAPI = payload => axiosMagicMind.post(careerform, payload);

export const createCareerFileUploadAPI = payload => axiosMagicMindFileUpload.post(upload, payload);

