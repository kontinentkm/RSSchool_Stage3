// getPosts.tsx
export const getAllPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`/api/posts`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  const data = await response.json();
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = data.slice(start, end);

  return {
    posts: paginatedData,
    totalPages: Math.ceil(data.length / limit),
  };
};

export const getPostsBySearch = async (
  search: string,
  page = 1,
  limit = 10
) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  const data = await response.json();
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = data.slice(start, end);

  return {
    posts: paginatedData,
    totalPages: Math.ceil(data.length / limit),
  };
};
