import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

import './App.css';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    };
    getData();
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/:id" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
