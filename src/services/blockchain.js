import { blockchain } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getBlockChainAPI = () => axiosMagicMind.get(blockchain);
