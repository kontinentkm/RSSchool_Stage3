import axios from 'axios';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';
import { Post } from '../../../Types';
import './SinglePost.css';

export const singlePostLoader: LoaderFunction = async ({ params }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return data;
};

const SinglePost = () => {
  const post: Post = useLoaderData() as Post;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/RSSchool_Stage3/dist/posts');
  };

  return (
    <div className="single-post-page">
      <button className="single-post-back-btn" onClick={handleBackClick}>
        Close
      </button>

      <h1>Single Post Page</h1>

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
