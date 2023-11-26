//components/Posts.tsx
import Link from 'next/link';
import { Post } from '@/types';
import React from 'react';

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
