import React from 'react';
import './App.css';
import { Text } from './components/polymorphic/Text';
function App() {

  return (
    <div className="App">
      <Text size='lg' as='h1'>Heading</Text>
      <Text size='md' as='p'>Paragraph</Text>
      <Text size='sm' as='label' htmlFor='someId'>Label</Text>
    </div>
  );
}

export default App;
