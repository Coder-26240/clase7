import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export const CardInfo = ({ name }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      method: 'GET',
    })
      .then((newResponse) => newResponse.json())
      .then((pokemonDetail) => {
        console.log(pokemonDetail);
        const pokemon = {
          name: pokemonDetail.name,
          imagen: pokemonDetail.sprites.front_default,
          experiencia: pokemonDetail.base_experience,
        };
        setPokemon(pokemon);
      });
    console.log(pokemon);
  }, []);

  return pokemon ? (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon?.imagen} />
      <Card.Body>
        <Card.Title>{pokemon?.name}</Card.Title>
        <Card.Text>{pokemon?.experiencia}</Card.Text>
      </Card.Body>
    </Card>
  ) : null;
};
