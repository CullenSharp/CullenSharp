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
		<section>
			<Link to='/'>
				<h3>Home</h3>
			</Link>
			{ content &&
        <>
        	<h1 className='headline'>{content.title}</h1>
        	<h4>{`${new Date(content.publishedAt).toDateString()} ⁂ ${readTime()}`}</h4>
        	<audio controls>
        		<source src={tokyoReggy} type="audio/mp3" />
        	</audio>
        	<article>
        		<figure>
        			<img src={urlFor(content.mainImage).size(400,400).url()} alt={content.title} />
        			<figcaption>[1] a shuttle</figcaption>
        		</figure>
        		<BlockContent blocks={content.body} />
        	</article>
        </>
			}
		</section>
	);
}

export default Post;