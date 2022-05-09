function SearchResult( {result, isSelection, onSelection } ) {
    function onClick() {
        onSelection?.(result);
    }

    const {item} = result;
    const date = new Date(item['modified']);
    return (
        <div className={`SearchResult ${isSelection ? "isSelection" : ""}`} onClick={onClick}>
            <div className="ResultMain">
                <div className="ResultId">
                    {item.id} - by: {item.author}
                </div>
                <div className="ResultType">
                    {item.type}
                </div>
            </div>
            <div className="ResultSecondary">
                Updated: {date.toDateString()}
            </div>
        </div>
    );
}

export default SearchResult;