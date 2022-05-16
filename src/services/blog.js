import { blog, blogcategory, blogmail } from '../config/api/apiEndpoints';
import axiosMagicMind from '../config/api/axiosMagicMind';

export const getBlogAPI = () => axiosMagicMind.get(blog);

export const getBlogCategoryAPI = () => axiosMagicMind.get(blogcategory);

export const getBlogIndividualAPI = slug => axiosMagicMind.get(blog + '?slug=' + slug);

export const createBlogMailAPI = payload => axiosMagicMind.post(blogmail, payload);
