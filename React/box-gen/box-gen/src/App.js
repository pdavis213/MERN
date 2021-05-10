import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import BoxBuilder from './components/BoxBuilder';

function App() {
  const [boxes, setBoxes] = useState([]);

  const colorInput = ( newColor ) => {
    setBoxes( [...boxes, newColor] );
  }

  return (
    <div>
        <Form onNewColor={ colorInput } />
        <BoxBuilder color={ boxes } />
    </div>
  );
}

export default App;
