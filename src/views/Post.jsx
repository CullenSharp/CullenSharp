/* eslint-disable no-mixed-spaces-and-tabs */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams, Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

//Components
import BlockContent from '@sanity/block-content-to-react';

//Utilities
import readTime from '../scripts/readTime';

//Assets
import tokyoReggy from '../assets/02-Tokyo-Reggy.mp3';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

function Post() {
	const [content, setContent] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post" && slug.current == "${slug}"]{
          _id,
          title,
          mainImage,
          body,
          categories[0...10]->{title},
          publishedAt
        }`
			)
			.then((data) => setContent({...data[0]}))
			.catch(console.error);
	}, []);

	return(
		<div className='view'>
			<Link to='/'>
				<h3 className='navigation'>🏠 home</h3>
			</Link>
			{ content &&
        <>
        	<h1 className='text-8xl font-display mt-28'>{content.title}</h1>
        	<p className='text-2xl font-body mb-6'>{`${new Date(content.publishedAt).toDateString()} ⁂ ${readTime()}`}</p>
        	<audio className='mb-16 drop-shadow-lg' controls>
        		<source src={tokyoReggy} type="audio/mp3" />
        	</audio>
        	<article className='w-1/2'>
        		<p className='mb-8 font-body'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolores corrupti expedita quia alias corporis hic harum eligendi enim quis. Eius natus doloremque quam illo incidunt illum, placeat aliquam nulla accusamus, reprehenderit voluptatum vero ab velit, debitis quasi amet voluptas modi ex fuga laudantium neque qui quis sapiente
        		</p>
        		<figure className='mb-6'>
        			<img src={urlFor(content.mainImage).size(400,400).url()} alt={content.title} />
        			<figcaption>
								[1] <a href="#">a thing↗</a>
        			</figcaption>
        		</figure>
        		<BlockContent blocks={content.body} />
        	</article>
        </>
			}
		</div>
	);
}

export default Post;