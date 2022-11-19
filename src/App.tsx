import React from 'react';
import './App.css';
import {Status} from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';
import {Greet} from './components/Greet';

function App() {
  
  return (
    <div className="App">
      <Status status='loading'/>
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
      <Greet name="Khanh Linh" isLoggedIn={true}/>
    </div>
  );
}

export default App;
