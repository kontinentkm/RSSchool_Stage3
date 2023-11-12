export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

export interface PostsListProps {
  posts: Post[];
  loading: boolean;
}

export interface SearchProps {
  handleSearch: (inputValue: string) => void;
}
