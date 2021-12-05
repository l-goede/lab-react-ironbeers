import React from 'react';
import { Button } from 'react-bootstrap';

function NewBeer(props) {
  const { btnAdd } = props;

  return (
    <div>
      <form onSubmit={btnAdd}>
        <input name="name" type="text" placeholder=" name" />
        <input name="tagline" type="text" placeholder="tagline" />
        <input name="description" type="text" placeholder="decription" />
        <input name="first_brewed" type="text" placeholder="first brewed" />
        <input name="brewers_tips" type="text" placeholder="brewers tips" />
        <input
          name="attenuation_level"
          type="number"
          placeholder="attenuation level"
        />
        <input name="contributed_by" type="text" placeholder="contributed by" />

        <Button type="submit">Add beer</Button>
      </form>
    </div>
  );
}

export default NewBeer;
