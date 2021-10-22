export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: {type: 'author'}
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
			name: 'projectURL',
			title: 'Project URL',
			type: 'string'
		},
		{
			name: 'abstract',
			title: 'Abstract',
			type: 'blockContent'
		},
		{
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [
				{
					type: 'string',
					title: 'Link',
				}
			]
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}
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
				subtitle: author && `by ${author}`
			});
		},
	},
};