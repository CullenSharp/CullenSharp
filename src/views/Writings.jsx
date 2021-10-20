import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

function Writings() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
          title,
          slug
        }`
			)
			.then((data) => setPosts(data))
			.catch(console.error);
	});

	return(
		<section>
			<Link  to='/'>
				<h3>Home</h3>
			</Link>
			<h1>Nothing to see here</h1>
			{ posts?.map(({slug, _id, title}) => (
				<Link to={'/Writings/'+slug.current} key={_id}>
					<h2>{title}</h2>
				</Link>
			))}
		</section>
	);
}

export default Writings;
