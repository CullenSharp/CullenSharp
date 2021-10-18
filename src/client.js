import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'cq5ohcjc',
	dataset: 'production',
	useCdn: true
});
