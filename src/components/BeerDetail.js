import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';

function BeerDetail(props) {
  const { id } = useParams();
  const [beerDetail, setBeerDetail] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeerDetail(response.data);
    };
    getData();
  }, [id]);

  if (!beerDetail) {
    return <Spinner animation="grow" variant="dark" />;
  }

  return (
    <div key={beerDetail._id}>
      <Header />
      <h1>Beer Detail</h1>
      <img src={beerDetail.image_url} alt="" />
      <h2>{beerDetail.name}</h2>
      <p>{beerDetail.tagline}</p>
      <p>{beerDetail.first_brewed}</p>
      <p>{beerDetail.attenuation_level}</p>
      <p>{beerDetail.description}</p>
      <p>{beerDetail.contributed_by}</p>
    </div>
  );
}

export default BeerDetail;
