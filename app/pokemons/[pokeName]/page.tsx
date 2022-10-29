import { use } from 'react';
import getPokemon, { Pokemon } from '../../PokemonData';

export default async function PokePage({
    params,
}: {
    params: { pokeName: string } | undefined;
}) {
    if (!params) {
        return (
            <div>
                <h1>Something went wrong</h1>
            </div>
        );
    }
    let pokemon: Pokemon = use(getPokemon(params.pokeName));
    return (
        <div style={{ padding: '2em' }}>
            <h1>{JSON.stringify(pokemon, undefined, 2)}</h1>
        </div>
    );
}
