import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

function Writings() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
          title,
					mainImage,
          slug,
					publishedAt
        }`
			)
			.then((data) => setPosts(data))
			.catch(console.error);
	});

	return(
		<div className='view'>
			<Link  to='/'>
				<h3 className='navigation'>🏠 home</h3>
			</Link>
			<h2 className='heading2'>writings</h2>
			<p className='subtitle'>an archive of my writing, musings, and notes generally</p>
			{ posts?.map(({slug, _id, title, mainImage, publishedAt}) => (
				<article className='posts' key={_id}>
					<figure>
						<img className='mr-4' src={urlFor(mainImage).size(530,410)} alt={title} />
						<figcaption>
						[1] <a href="#">a thing↗</a>
						</figcaption>
					</figure>
					<section className='hero'>
						<Link to={'/Writings/'+slug.current}>
							<h2 className='text-5xl font-display tracking-tighter'>{title}</h2>
						</Link>
						<h3 className='text-2xl font-body mb-7'>{new Date(publishedAt).toDateString()}</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, maxime nihil? Iusto quasi molestias, non ad temporibus, veritatis assumenda pariatur voluptatem quod qui, dolorem facilis atque ullam eius explicabo necessitatibus?
						</p>
					</section>
				</article>
			))}
		</div>
	);
}

export default Writings;
