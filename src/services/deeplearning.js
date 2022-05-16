import { deeplearning } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getDeepLearningAPI = () => axiosMagicMind.get(deeplearning);
