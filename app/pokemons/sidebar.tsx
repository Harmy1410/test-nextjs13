'use client';
import Link from 'next/link';

export default function Sidebar({ name }: { name: string }) {
    return (
        <Link
            href={`/pokemons/${name}`}
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
}
