import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Ik ben aan het laden</div>;
    }

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Abilities:</p>
            <ul>
                {pokemon.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonDetail;
