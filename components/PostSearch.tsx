'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';
import { Post } from '@/types';
import React from 'react';

type Props = {
  onSearch: (value: Post[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const { posts, totalPages } = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
