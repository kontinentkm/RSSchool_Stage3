import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../api'; // Импортируем запрос RTK Query
import './SinglePost.css';

const SinglePost = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const { data: post, isError } = useGetPostByIdQuery(Number(id));

  useEffect(() => {
    if (isError) {
      navigate('/error');
    }
  }, [isError, navigate]);

  const handleBackClick = () => {
    navigate('/RSSchool_Stage3/dist/posts');
  };

  return (
    <div className="single-post-page" data-testid="single-post-page">
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
