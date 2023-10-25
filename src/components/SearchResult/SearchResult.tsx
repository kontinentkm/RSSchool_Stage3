import { Person } from '../../models';
import './SearchResult.css';

export const SearchResult = ({ result }: { result: Person['name'] }) => {
  return (
    <div
      className="search-result"
      onClick={() => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
