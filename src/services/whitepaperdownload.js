import { whitepaperdownload } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const createWhitePaperDownloadAPI = payload =>
	axiosMagicMind.post(whitepaperdownload, payload);
