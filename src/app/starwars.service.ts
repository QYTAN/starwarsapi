import { Injectable} from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

const URL = 'https://swapi.co/api/';
const PeopleURL = 'https://swapi.co/api/people/';
const PlanetsURL = 'https://swapi.co/api/planets/';

@Injectable()
export class StarwarsService{
    constructor(private http: HttpClient){}
        
    //get all categories
    getCategories(){
        return(this.http.get(URL))
                .toPromise()
                .then(result => {
                    return({
                        people: result['people'],
                        planets: result['planets'], 
                        films: result['films'],
                        species: result['species'],
                        vehicles: result['vehicles'],
                        starships: result['starships']
                    })
                })
        }

    //get all people
    getPeople(){
        return(this.http.get(PeopleURL))
            .toPromise()
            .then(result =>{
                return({
                    count: result['count'],
                    next: result['next'],
                    previous: result['previous'],
                    results: result['results']
                })
            })
    }

    //get PersonDetails
    getPersonDetails(personid: string){ 
        return(this.http.get(`${PeopleURL}${personid}`))
                .toPromise()
                .then(result => {
                    return({
                        name: result['name'],
                        height: result['height'],
                        mass: result['mass'],
                        hair_color: result['hair_color'],
                        skin_color: result['skin_color'],
                        eye_color: result['eye_color'],
                        birth_color: result['birth_color'],
                        gender: result['gender'],
                        homeworld: result['homeworld'],
                        films: result['films'],
                        species: result['species'],
                        vehicles: result['vehicles'],
                        starships: result['starships'],
                        created: result['created'],
                        edited: result['edited'],
                        url: result['url'],
                    })
                })
    }

    //get all planets
    getPlanets(){
        return(this.http.get(PlanetsURL))
            .toPromise()
            .then(result =>{
                return({
                    count: result['count'],
                    next: result['next'],
                    previous: result['previous'],
                    results: result['results']
                })
            })
    }    
}