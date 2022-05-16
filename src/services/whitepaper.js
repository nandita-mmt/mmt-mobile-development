import { whitepaper } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getWhitePaperAPI = () => axiosMagicMind.get(whitepaper);

export const getWhitePaperIndividualAPI = slug => axiosMagicMind.get(whitepaper + '?slug=' + slug);
