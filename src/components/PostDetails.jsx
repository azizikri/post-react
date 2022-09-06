import { useParams } from 'react-router';
import useFetch from '../hook/useFetch';


const PostDetails = () => {
	const { id } = useParams();
	const {
		data: post,
		error,
		isLoading,
	} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


	return (
		<div className='blog-details'>
			{isLoading && <div>Loading...</div>}

			<article>
				<h2>{post.title}</h2>
				<p>{post.author && 'Written by ' + post.author}</p>
				<div>{post.body}</div>
			</article>

			{error && <div>{error}</div>}
		</div>
	);
};

export default PostDetails;
