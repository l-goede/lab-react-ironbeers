import React, { useState, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';

function RandomBeer() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setRandom(response.data);
    };
    getData();
  });
  if (!random) {
    return <Spinner animation="grow" variant="dark" />;
  }

  let randomBeer = random[Math.floor(Math.random() * random.length)];
  return (
    <div key={randomBeer._id}>
      <Header />
      <h1> Random Beer</h1>
      <img src={randomBeer.image_url} alt="" />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
