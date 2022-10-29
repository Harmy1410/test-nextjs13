import { use } from 'react';
import getPokemon, { Pokemon } from '../../PokemonData';

export default async function PokePage({ params }: any) {
    console.log(params.pokeName);
    return (
        <div style={{ padding: '2em' }}>
            <h1>{params.pokeName}</h1>
        </div>
    );
}
