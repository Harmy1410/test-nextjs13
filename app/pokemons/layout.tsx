import { use } from 'react';
import getPokemons, { Pokemons } from '../PokemonsData';
import Sidebar from './sidebar';

export default function PokemonsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let pokemons: Pokemons = use(getPokemons());
    let names = pokemons.results?.map((pokemon) => {
        return pokemon.name;
    });
    return (
        <section style={{ display: 'flex' }}>
            <aside
                style={{
                    height: '91vh',
                    width: '21em',
                    overflowY: 'scroll',
                    padding: '2em',
                }}>
                {names?.map((name) => {
                    return <Sidebar key={name} name={name} />;
                })}
            </aside>
            {children}
        </section>
    );
}
