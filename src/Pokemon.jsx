import { useEffect, useState } from "react";
import "./Pokemon.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Pokemon({ name, url, onFavorite, isFavorite }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        });
  }, [url]);

  const toggleFavorite = () => {
    onFavorite(pokemon, !isFavorite);
  };

  if (loading) {
    return <div>Ik ben aan het laden</div>;
  }

  return (
      <div className="pokemon-list">
        <div className="pokemon-self">
          <div className="pokemon-name">
            <h2>{name}</h2>
          </div>

            <div className="pokemon-image">
              <Link to={`/pokemon/${pokemon.id}`}>
                <img src={pokemon.sprites.front_default} alt="" />
              </Link>
            </div>
          <div className="pokemon-favorite">
            <FaStar
                className={isFavorite ? "favorite" : ""}
                onClick={toggleFavorite}
            />
          </div>
        </div>
      </div>
  );
}

export default Pokemon;