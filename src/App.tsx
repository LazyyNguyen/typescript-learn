import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import {PersonList} from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const personList = [
    {
      first: "Khánh",
      last: "Linh"
    },
    {
      first: "Linh",
      last: "Nguyen"
    },
    {
      first: "Khanh Linh",
      last: "Nguyen Thi"
    },

  ]
  return (
    <div className="App">
      <Greet name="Khánh Linh" messageCount={3} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList}/>
    </div>
  );
}

export default App;
