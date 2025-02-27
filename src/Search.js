import { useState, useEffect, createRef } from 'react';
import { search } from './API';
import SearchResults from './SearchResults';

function Search({onSelection}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectionIndex, setSelectionIndex] = useState(0);
    const [hasSelected, setHasSelected] = useState(false);

    const searchInputRef = createRef();

    function updateQuery(event) {
        const q = event.target.value;
        setQuery(q);
        setSelectionIndex(0);
        const searchResults = search(q);
        searchResults.sort((lhs, rhs) => lhs.item.id.localeCompare(rhs.item.id))
        setResults(searchResults);
    }

    function keyDownHandler({key}) {
        switch (key) {
            case 'ArrowUp':
                setSelectionIndex(selectionIndex > 0 ? selectionIndex - 1 : 0);
                break;
            case 'ArrowDown':
                setSelectionIndex(selectionIndex < results.length - 1 ? selectionIndex + 1 : results.length - 1);
                break;
            case 'Enter':
                if (results.length > 0) {
                    onSelection(results[selectionIndex]);
                    setHasSelected(true);
                }
                break;
            case 'Escape':
                onSelection(null);
                break;
            default:
                break;
        }
    }

    function onBlur() {
        setImmediate(() => {
            if (hasSelected) {
                onSelection(null);
            }
        });
    }

    function onSelectionWrapper(result) {
        setHasSelected(true);
        onSelection(result);
    }

    useEffect(() => {
        const ref = searchInputRef.current;
        ref?.addEventListener("keydown", keyDownHandler);
        return () => {
            ref?.removeEventListener("keydown", keyDownHandler);
        }
    })

    return (
        <div className="Search">
            <div className="SearchInput">
                <input autoFocus type="text" value={query} onChange={updateQuery} onBlur={onBlur} ref={searchInputRef}/>
            </div>
            <SearchResults results={results} selectionIndex={selectionIndex} onSelection={onSelectionWrapper}/>
        </div>
    )
}

export default Search;