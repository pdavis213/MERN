import React from 'react'

import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div>
      <NewComponent last_name = {'Doe'} first_name = {'Jane'} age = {45} hairColor = {'Black'}/>
      <NewComponent last_name = {'Smith'} first_name = {'John'} age = {88} hairColor = {'Brown'}/>
      <NewComponent last_name = {'Fillmore'} first_name = {'Millard'} age = {50} hairColor = {'Brown'}/>
      <NewComponent last_name = {'Smith'} first_name = {'Maria'} age = {62} hairColor = {'Brown'}/>
    </div>
  );
}

export default App;
