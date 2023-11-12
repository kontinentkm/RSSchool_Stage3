import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import { Post } from '../../../Types';

interface PostsContextProps {
  posts: Post[];
  loading: boolean;
  currentPage: number;
  postsPerPage: number;
  getPosts: (inputValue: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

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
    } else {
      getPosts('');
    }
  }, []);

  const value: PostsContextProps = {
    posts,
    loading,
    currentPage,
    postsPerPage,
    getPosts,
    setCurrentPage,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
};
