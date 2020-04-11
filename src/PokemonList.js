import React from 'react'

function PakemonList({pokemon}) {
    return(
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
export default PakemonList