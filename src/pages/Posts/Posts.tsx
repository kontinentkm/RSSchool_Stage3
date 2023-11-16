import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetPostsQuery, // Импортируем запрос из RTK Query
} from '../../api'; // Импортируем экземпляр RTK Query

import {
  selectPostsPerPage,
  setPostsPerPage,
} from '../../features/postsPerPageSlice';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import './Posts.css';
import { Outlet } from 'react-router-dom';

const Posts = () => {
  const dispatch = useDispatch();
  const postsQuery = useGetPostsQuery(); // Используем запрос RTK Query

  const loading = postsQuery.isLoading;
  const posts = postsQuery.data || [];
  const postsPerPage = useSelector(selectPostsPerPage);

  useEffect(() => {
    const savedInput = localStorage.getItem('searchInput');
    // Вызываем запрос RTK Query с сохраненным вводом
    postsQuery.refetch(savedInput || '');
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (inputValue) => {
    // Вызываем запрос RTK Query с новым вводом
    postsQuery.refetch(inputValue);
  };

  const handlePostsPerPageChange = (value) => {
    dispatch(setPostsPerPage(value));
  };

  return (
    <div className="posts-page">
      <div className="posts-page-posts">
        <Search handleSearch={handleSearch} />

        <h1 className="posts-title">Posts page</h1>

        <div className="posts-per-page-dropdown">
          <label htmlFor="postsPerPage">Posts per page:</label>
          <select
            id="postsPerPage"
            name="postsPerPage"
            value={postsPerPage}
            onChange={(e) => handlePostsPerPageChange(Number(e.target.value))}
            data-testid="postsPerPage"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

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
