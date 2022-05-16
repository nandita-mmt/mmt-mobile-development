import { faq } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getFaqAPI = () => axiosMagicMind.get(faq);
