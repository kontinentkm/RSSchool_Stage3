import React from 'react';
import { Link } from 'react-router-dom';
import { PostsListProps } from '../../../Types';
import './PostsList.css';

export default function PostsList({ posts, loading }: PostsListProps) {
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (posts.length === 0) {
    return <h2 className="no-posts">No posts found</h2>;
  }

  return (
    <div className="posts-list">
      {posts.map((post, idx) => (
        <Link className="post-item" key={idx} to={`${post.id}`}>
          <span className="post-id">{post.id} - </span>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
