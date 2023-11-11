import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import './Posts.css';
import { Post } from '../../../Types';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  const getPosts = async (inputValue: string) => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;
    const results = data.filter((post: Post) => {
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
    if (savedInput) {
      getPosts(savedInput);
    } else getPosts('');
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (inputValue: string) => {
    getPosts(inputValue);
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
            onChange={(e) => setPostsPerPage(Number(e.target.value))}
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
