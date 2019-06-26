import React from 'react';
import classes from './Post.css';

const Post = props => {

	return (
		<div className={classes.Post}>
			<p>Username</p>
			<p>User Rating</p>
			<p>Location</p>
			<p>Commission</p>
			<p>Limit</p>
      <button>Buy</button>
		</div>
	);
};

export default Post;