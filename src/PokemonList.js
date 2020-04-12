import React from 'react'

function PokemonList({pokemon}) {
    return(
        <div>
            <ul>
                {pokemon.map(p => (
                    <li className="list-group-item" key={p}>{p}</li>
                ))}
            </ul>
        </div>
    )
}
export default PokemonList