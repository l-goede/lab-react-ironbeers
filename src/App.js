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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = event.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };

    let response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      newBeer
    );
    setBeers([response.data, ...beers]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/:id" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer btnAdd={handleSubmit} />} />
      </Routes>
    </div>
  );
}
export default App;
