/* eslint-disable no-undef */
import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'cq5ohcjc',
	dataset: 'production',
	apiVersion: '2021-10-20',
	token: process.env.REACT_APP_SANITY_TOKEN,
	useCdn: true
});
