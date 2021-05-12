import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res=>{
      setPokemon(res.data.results);
    })}, []);

  return (
    <div className="App">
      <button className="btn btn-warning btn-lg mt-5" onClick="">Fetch Pokemon</button>

      {
        pokemon.map((item, i)=><h1 key={i}>{item.name}</h1>)
      }

    </div>
  );
}

export default App;