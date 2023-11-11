import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../../../Types';
import './SinglePost.css';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(data);
      } catch (error) {
        // Обработка ошибок, например, перенаправление на страницу ошибки
        navigate('/error');
      }
    };

    fetchData();
  }, [id, navigate]);

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
        {post ? (
          <>
            <p className="post-id">
              <span>Post ID:</span>
              {post.id}
            </p>
            <p>
              <span>Post Title:</span>
              {post.title}
            </p>
            <p>
              <span>Post Body:</span>
              {post.body}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
