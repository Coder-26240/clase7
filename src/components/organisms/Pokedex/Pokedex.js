import React, { useEffect, useState } from 'react';
import { CardInfo } from '../../molecules/CardInfo';
import './Pokedex.styles.css';

const Pokedex = () => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=1', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setPokeList(data.results);
        return data.results;
      })
      .then((results) => {
        results.forEach((pokemonItem) => {});
      });
  }, []);

  // useEffect(( ) => {

  // }, [])
  // https://pokeapi.co/api/v2/pokemon/ditto
  return (
    <div className="podedexContainer">
      <div>
        {pokeList.map((pokemon, index) => {
          return <CardInfo name={pokemon.name} key={index} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Pokedex;
