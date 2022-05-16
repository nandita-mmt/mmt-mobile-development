import { teams } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getTeamsAPI = () => axiosMagicMind.get(teams);
