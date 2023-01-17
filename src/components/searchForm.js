import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchForm({ onSearch, placeholder }) {
  return (
    <form id="search-form">
      <input
        id="search"
        placeholder={placeholder}
        type={"text"}
        onChange={e => onSearch(e.target.value)}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
export default SearchForm;
