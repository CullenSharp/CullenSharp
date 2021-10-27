export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			options: {
				maxLength: 60
			}
		},
		{
			name: 'abstract',
			title: 'Abstract',
			type: 'string',
			options: {
				maxLength: 150
			}
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: {type: 'author'},
		},
		{
			name: 'audio',
			title: 'Audio',
			type: 'file'
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{type: 'reference', to: {type: 'category'}}],
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const {author} = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
