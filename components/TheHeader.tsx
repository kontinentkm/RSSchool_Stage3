import Link from 'next/link';

const TheHeader = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export { TheHeader };
