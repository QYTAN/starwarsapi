export interface Categories {
    films: string;
    people: string;
    planets: string;
    species: string;
    starships: string;
    vehicles: string
}

export interface Items {
    count: number;
    next: string;
    previous: number;
    results: Array<string>
}

export interface personDetails {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_color: string;
    gender: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: string;
    edited: string;
    url: string;
}

export interface Planets {
    count: number;
    next: string;
    previous: number;
    results: Array<string>
}

export interface Comments{
    comment: string
}