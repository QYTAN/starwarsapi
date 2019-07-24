import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Categories } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private starwarsSvc: StarwarsService, private route: Router) { }

  categories: Categories[]=[];
  private people;

  ngOnInit() {
    this.starwarsSvc.getCategories()
        .then(result=>{
        console.info('categoriesresult: ', result);

        //push api data into an instance of Categories interface
        this.categories.push({
          people: result.people,
          planets: result.planets,
          films: result.films,
          species: result.species,
          vehicles: result.vehicles,
          starships: result.starships
        })
        this.people = this.categories[0].people;
        console.info('people: ', this.people);
        console.info('categories: ', this.categories);
        console.info('people: ', this.categories[0].people);
    })
  }

  //navigate to /people which calls itemscomponent in approute
  getPeople(){
    this.route.navigate(['/people'])
    // this.starwarsSvc.getPeople()
    //     .then(result=>{
    //       console.info('peopleresult: ', result);
    //     })
  }

  getPlanets(){
    this.route.navigate(['/planets'])
  }

  getFilms(){
    this.route.navigate(['/films'])
  }

  getSpecies(){
    this.route.navigate(['/species'])
  }

  getStarships(){
    this.route.navigate(['/starships'])
  }

  getVehicles(){
    this.route.navigate(['/vehicles'])
  }
}
