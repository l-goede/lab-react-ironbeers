import React from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Homepage() {
  return (
    <div>
      <img src={allBeers} alt="" />
      <Link to="/beers">All Beers</Link>
      <img src={randomBeer} alt="" />
      <Link to="/random-beer">Random Beer</Link>
      <img src={newBeer} alt="" />
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}

export default Homepage;
