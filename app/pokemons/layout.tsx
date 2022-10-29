'use client';
import Sidebar from './sidebar';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function PokemonsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            {children}
        </div>
    );
}
