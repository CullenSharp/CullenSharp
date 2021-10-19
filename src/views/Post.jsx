/* eslint-disable no-mixed-spaces-and-tabs */

import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams, Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

//Components
import BlockContent from '@sanity/block-content-to-react';

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

	console.log(content);

	return(
		<>
			<Link to='/'>
				<h2>Home</h2>
			</Link>
			{ content &&
        <>
        	<h1>{content.title}</h1>
        	<h2>Oct 18th ⁂ 14mins read time</h2>
        	<figure>
        		<img src={urlFor(content.mainImage).size(400,400).url()} alt={content.title} />
        	</figure>
        	<BlockContent blocks={content.body} />
        </>
			}
		</>
	);
}

export default Post;