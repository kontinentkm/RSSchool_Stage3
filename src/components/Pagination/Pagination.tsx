import './Pagination.css';

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-number" key={number}>
            <button className="page-btn" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
