import { Search } from '@/components/Search';
import Link from 'next/link';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Search />

      {children}
    </div>
  );
}
