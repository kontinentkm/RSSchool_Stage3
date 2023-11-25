// api/posts/page.tsx
import { NextResponse } from 'next/server';
import { Post } from '@/types';

async function fetchPostsFromAPI() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  let currentPosts = [];

  if (query) {
    currentPosts = await fetchPostsFromAPI();
    currentPosts = currentPosts.filter((post: Post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    currentPosts = await fetchPostsFromAPI();
  }

  return NextResponse.json(currentPosts);
}
