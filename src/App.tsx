import React from 'react';
import './App.css';
import { List } from './components/generics/List';
function App() {

  return (
    <div className="App">
      {/* <List
        items={['Lemon', 'Apple', 'Banana', 'Watermelon']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
      /> */}
            <List
        items={[{id:0,name: 'Apple'},{id:1,name: 'Banana'},{id:2,name: 'Watermelon'}]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
