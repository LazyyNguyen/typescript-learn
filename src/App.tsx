import React from 'react';
import './App.css';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
function App() {

  return (
    <div className="App">
      <RandomNumber value={10} isPosition/>
    </div>
  );
}

export default App;
