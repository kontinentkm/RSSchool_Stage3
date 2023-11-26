// blog/page.tsx
'use client';

import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';
import Pagination from '@/components/Pagination';
import { getAllPosts } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { Post } from '@/types';
import React from 'react';

const PAGE_SIZE_OPTIONS = [5, 10, 20];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  useEffect(() => {
    setLoading(true);
    getAllPosts(currentPage, pageSize)
      .then((data) => {
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      })
      .finally(() => setLoading(false));
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      <div>
        <label htmlFor="pageSize">Posts per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          {PAGE_SIZE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
