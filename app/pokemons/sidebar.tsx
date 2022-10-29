import { use } from 'react';
import getPokemons, { Pokemons } from '../PokemonsData';
import Link from 'next/link';

export default function Sidebar() {
    let pokemons: Pokemons = use(getPokemons());
    let names = pokemons.results?.map((pokemon) => {
        return pokemon.name;
    });
    return (
        <div
            style={{
                height: '91vh',
                width: '21em',
                overflowY: 'scroll',
                padding: '2em',
            }}>
            {names?.map((name) => {
                return (
                    <Link
                        href={`/pokemons/${name}`}
                        key={name}
                        style={{
                            width: '12em',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '1px solid gray',
                            borderRadius: '0.5em',
                            padding: '1em 1.5em',
                            margin: '1em 2em',
                        }}
                        prefetch={false}>
                        {name}
                    </Link>
                );
            })}
        </div>
    );
}
