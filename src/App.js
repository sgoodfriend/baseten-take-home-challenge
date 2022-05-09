import { useState, useEffect } from 'react';
import './App.css';
import Instructions from './Instructions';
import Trigger from './Trigger';
import SelectedOutput from './SelectedOutput';
import Search from './Search';

function App() {
  const [selected, setSelected] = useState();
  const [isSearchActive, setIsSearchActive] = useState(false);

  function handleTrigger() {
    setIsSearchActive(!isSearchActive);
  }

  function onSelection(result) {
    setSelected(result);
    setIsSearchActive(false);
  }

  function keyDownHandler({key, metaKey, ctrlKey, shiftKey, altKey}) {
    if (key === 'k' && (metaKey || ctrlKey) && !shiftKey && !altKey) {
      setIsSearchActive(!isSearchActive);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  })

  return (
    <div className="App">
      <Instructions />
      <div className="Implementation">
        <Trigger onTrigger={handleTrigger} />

        {isSearchActive ? <Search onSelection={onSelection}/> : undefined}

        <SelectedOutput selected={selected}/>
      </div>
    </div>
  );
}

export default App;
