import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function Beers(props) {
  const { beers } = props;

  if (!beers.length) {
    return <Spinner animation="grow" variant="dark" />;
  }
  return (
    <div>
      <Header />
      <h1>ALL BEERS</h1>
      {beers.map((elem) => {
        return (
          <div>
            <img src={elem.image_url} alt="" />
            <Link to={`/${elem._id}`}>{elem.name}</Link>
            <p>{elem.tagline}</p>
            <p>{elem.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
