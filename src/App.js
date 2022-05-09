import { useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import Trigger from './Trigger';
import SelectedOutput from './SelectedOutput';
import Search from './Search';

function App() {
  const [selected, setSelected] = useState();
  const [isTriggered, setIsTriggered] = useState(false);

  function handleTrigger() {
    setIsTriggered(!isTriggered);
  }

  function onSelection(result) {
    setSelected(result);
    setIsTriggered(false);
  }

  return (
    <div className="App">
      <Instructions />
      <div className="Implementation">
        <Trigger onTrigger={handleTrigger} />

        {isTriggered ? <Search onSelection={onSelection}/> : undefined}

        <SelectedOutput selected={selected}/>
      </div>
    </div>
  );
}

export default App;
