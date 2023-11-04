import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import './Posts.css';

export const postsLoader = async ({ request, params }) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="posts-page">
      <h1 className="posts-title">Posts page</h1>

      {posts.map((post, idx) => (
        <Link className="post-item" key={idx} to={`${post.id}`}>
          <span className="post-id">{post.id} - </span>
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Posts;
