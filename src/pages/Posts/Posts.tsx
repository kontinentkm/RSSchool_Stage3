//posts.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../api';
import {
  selectPostsPerPage,
  setPostsPerPage,
} from '../../features/postsPerPageSlice';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import './Posts.css';
import { Outlet } from 'react-router-dom';
import { setSearchInput } from '../../features/searchSlice';
import { Post } from '../../types';

const Posts = () => {
  const dispatch = useDispatch();
  const postsQuery = useGetPostsQuery();
  const loading = postsQuery.isLoading;
  const postsPerPage = useSelector(selectPostsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedInput = localStorage.getItem('searchInput');
    handleSearch(savedInput || '');
  }, [postsQuery]);

  const filterPosts = (inputValue: string) => {
    const data = postsQuery.data || [];
    const results = data.filter((post: Post) => {
      return (
        post &&
        post.title &&
        post.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setPosts(results);
  };

  const handleSearch = (inputValue: string) => {
    filterPosts(inputValue);
    dispatch(setSearchInput(inputValue));
  };

  const handlePostsPerPageChange = (value: number) => {
    dispatch(setPostsPerPage(value));
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PostsList posts={currentPost} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </>
        )}
      </div>

      <div className="posts-page-single-post">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
