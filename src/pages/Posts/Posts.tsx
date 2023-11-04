/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Posts.css';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    getPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="posts-page">
      <div className="posts-page-posts">
        <h1 className="posts-title">Posts page</h1>

        <PostsList posts={currentPost} loading={loading} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>

      <div className="posts-page-single-post">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
