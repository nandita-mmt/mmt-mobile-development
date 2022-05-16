import { contact, experts, upload } from '../config/api/apiEndpoints';
import axiosMagicMind, { axiosMagicMindFileUpload } from '../config/api/axiosMagicMind';

export const createContactAPI = payload => axiosMagicMind.post(contact, payload);

export const createContactFileUploadAPI = payload => axiosMagicMindFileUpload.post(upload, payload);

export const createExpertsAPI = payload => axiosMagicMind.post(experts, payload);
