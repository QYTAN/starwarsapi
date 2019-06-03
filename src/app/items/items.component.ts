import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from '../model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private starwarsSvc: StarwarsService, private router:Router) {}

  private items: Items[] = [];
  private people;

  // private test: string;
  // private test2: string;  

  ngOnInit() {
    this.getPeople();
  }

  getPeople(){
    this.starwarsSvc.getPeople()
    .then(result=>{
      console.info('peopleresult: ', result);

      this.items.push({
        count: result.count,
        next: result.next,
        previous: result.previous,
        results: result.results,
      })
      this.people= this.items[0].results;
      console.info('items: ',this.items);
      console.info('people: ',this.people);
    })
  }

  //get index of person and navigate to /people/:index
  getDetails(personid: object){
    console.info('selected person object: ', personid);
    // this.test='testing1';
    // this.test2 = 'testing2';
    // console.info('teststring: ', `${this.test}${this.test2}`);
    this.router.navigate(['/people', personid]);
  }
}
