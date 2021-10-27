export default {
	name: 'project',
	title: 'Project',
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
			name: 'repoURL',
			title: 'Repo URL',
			type: 'string'
		},
		{
			name: 'abstract',
			title: 'Abstract',
			type: 'blockContent',
			options: {
				maxLength: 400
			}
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