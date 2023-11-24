import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Posts | Next App',
};

export default async function Posts() {
  const posts = await getData();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
