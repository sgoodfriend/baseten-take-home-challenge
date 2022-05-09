import React from 'react'
import SearchResult from './SearchResult';

function SelectedOutput({ selected }) {
  return (
    <div className="Output" data-cy="selected-output">
      <p>Selected Output:</p>
      {selected ? <SearchResult result={selected}/> : 'Nothing selected'}
    </div>
  );
}

export default SelectedOutput;
