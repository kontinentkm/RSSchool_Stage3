import axios from 'axios';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { Post } from '../../../Types';
import './SinglePost.css';

export const singlePostLoader: LoaderFunction = async ({ params }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return data;
};

const SinglePost = () => {
  const post: Post = useLoaderData();

  return (
    <div className="single-post-page">
      <h1>Single Post Page</h1>

      <Link className="single-post-back-btn" to={'/posts'}>
        Back
      </Link>

      <div className="single-page-block">
        <p>
          <span>Post ID:</span>
          {post.id}
        </p>
        <p>
          <span>Post Title:</span> {post.title}
        </p>
        <p>
          <span>Post Body:</span>
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
