import React from "react";

function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h2>Favorieten</h2>
      {favorites.map((favorite) => (
        <div key={favorite.name}>
          <img src={favorite.sprites.front_default} alt="" />
          <span>{favorite.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
