const getPokemons = async () => {
    const data: any = await fetch('https://pokeapi.co/api/v2/pokemon');
    return data.json();
};

export interface Pokemons {
    count: number;
    next: string;
    previous?: null;
    results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
    name: string;
    url: string;
}

export default getPokemons;
