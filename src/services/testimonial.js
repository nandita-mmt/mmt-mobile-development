import { testimonials } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getTestimonialAPI = () => axiosMagicMind.get(testimonials);
