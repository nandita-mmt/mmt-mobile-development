import React from 'react';
import BlogBanner from './BlogBanner/BlogBanner';
import BlogCards from './BlogCards/BlogCards';

import './Blog.scss';

const Blog = () => {
	return (
		<div className='Blog'>
			<BlogBanner />
			<BlogCards />
		</div>
	);
};
export default Blog;
