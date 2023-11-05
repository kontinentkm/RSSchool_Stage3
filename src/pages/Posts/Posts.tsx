/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Posts.css';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  const getPosts = async (inputValue) => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;
    const results = data.filter((post) => {
      return (
        post &&
        post.title &&
        post.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    setPosts(results);
    setLoading(false);
  };

  useEffect(() => {
    const savedInput = localStorage.getItem('searchInput');
    console.log(savedInput);
    if (savedInput) {
      getPosts(savedInput);
    } else getPosts('');
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (inputValue) => {
    getPosts(inputValue);
  };

  return (
    <div className="posts-page">
      <div className="posts-page-posts">
        <Search handleSearch={handleSearch} />

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
