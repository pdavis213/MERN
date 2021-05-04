import React from 'react'

import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <NewComponent name = {<h1>"Doe, Jane"</h1>}/>
      <NewComponent age = {<p>Age: 45</p>}/>
      <NewComponent hairColor = {<p>Hair Color: Black</p>}/>
      <NewComponent name = {<h1>"Smith, John"</h1>}/>
      <NewComponent age = {<p>Age: 88</p>}/>
      <NewComponent hairColor = {<p>Hair Color: Brown</p>}/>
      <NewComponent name = {<h1>"Fillmore, Millard"</h1>}/>
      <NewComponent age = {<p>Age: 50</p>}/>
      <NewComponent hairColor = {<p>Hair Color: Brown</p>}/>
      <NewComponent name = {<h1>"Smith, Maria"</h1>}/>
      <NewComponent age = {<p>Age: 62</p>}/>
      <NewComponent hairColor = {<p>Hair Color: Brown</p>}/>

    </div>
  );
}

export default App;
