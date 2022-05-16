import { digitalacceleration } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getDigitalAccelerationAPI = () => axiosMagicMind.get(digitalacceleration);
