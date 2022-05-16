import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getWhitePaperIndividualAPI } from '../../services/whitepaper';

import WhiteDownloadBanner from './WhiteDownloadBanner/WhiteDownloadBanner';
import WhiteDownloadCards from './WhiteDownloadCards/WhiteDownloadCards';

import './WhitePaperDownload.scss';

const WhitePaperDownload = () => {
	const [data, setData] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getWhitePaperIndividualAPI(params.slug);
			setData(res);
		};
		fetchData();
	}, [params.slug]);
	return (
		<div className='WhitePaperDownload'>
			<WhiteDownloadBanner />
			<WhiteDownloadCards data={data} />
		</div>
	);
};
export default WhitePaperDownload;
