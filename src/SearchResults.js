import SearchResult from "./SearchResult";

function SearchResults({ results, selectionIndex, onSelection }) {
    const listItems = results.map((result, idx) =>
        <SearchResult result={result} isSelection={idx === selectionIndex} onSelection={onSelection} key={idx}/>
    );
    return (
        <div className="SearchResults">
            {listItems}
        </div>
    );
}

export default SearchResults;