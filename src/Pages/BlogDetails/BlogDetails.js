import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import BlogDetailsBanner from './BlogDetailsBanner/BlogDetailsBanner';
import BlogDetailsCards from './BlogDetailsCards/BlogDetailsCards';
import { getBlogIndividualAPI } from '../../services/blog';

import './BlogDetails.scss';

const BlogDetails = () => {
	const [data, setData] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getBlogIndividualAPI(params.slug);
			console.log(899, res);
			setData(res);
		};
		fetchData();
	}, [params.slug]);
	return (
		<div className='BlogDetails'>
			{data.length > 0 && <BlogDetailsBanner data={data} />}
			<BlogDetailsCards data={data} />
		</div>
	);
};
export default BlogDetails;
