import { useEffect, useState } from "react";
import "./Pokemon.css";
import Pokemon from "./Pokemon";
import Favorites from "./Favorites";

function PokemonOverview() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFavorite = (pokemon, isFavorite) => {
    if (isFavorite) {
      setFavorites((favorites) => [...favorites, pokemon]);
    } else {
      setFavorites((favorites) =>
        favorites.filter((fav) => fav.name !== pokemon.name)
      );
    }
  };

  const filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Ik ben aan het laden</div>;
  }

  return (
    <>
      <div className="searchbar">
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <Favorites favorites={favorites} />
      <div className="Pokemon">
        {filteredPokemon.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            onFavorite={handleFavorite}
            isFavorite={favorites.some((fav) => fav.name === pokemon.name)}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonOverview;
