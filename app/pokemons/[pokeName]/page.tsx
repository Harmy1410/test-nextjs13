import { use } from 'react';
import getPokemon, { Pokemon } from '../../PokemonData';

export default async function PokePage({
    params,
}: {
    params: { pokeName: string };
}) {
    console.log(params.pokeName);
    return (
        <div style={{ padding: '2em' }}>
            <h1>{JSON.stringify(params, undefined, 2)}</h1>
        </div>
    );
}
