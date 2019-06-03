import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { personDetails } from '../model';
import { NgForm } from '@angular/forms';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private personid: string;
  private personDetails: personDetails[] = [];
  private details;
  private comment: string;

  constructor(private starwarsSvc: StarwarsService, private dexieSvc: DexieService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {
              }

  ngOnInit() {
    this.personid = this.activatedRoute.snapshot.url[1].toString();
    // console.info(this.personid);
    this.getPersonDetails(this.personid);
    this.loadComment();
  }

  getPersonDetails(personid:string){
    console.info(this.personid);
    this.starwarsSvc.getPersonDetails(personid)
        .then(result=>{
          // console.info('result: ', result);

          this.personDetails.push({
            name: result.name,
            height: result.height,
            mass: result.mass,
            hair_color: result.hair_color,
            skin_color: result.skin_color,
            eye_color: result.eye_color,
            birth_color: result.birth_color,
            gender: result.gender,
            homeworld: result.homeworld,
            films: result.films,
            species: result.species,
            vehicles: result.vehicles,
            starships: result.starships,
            created: result.created,
            edited: result.edited,
            url: result.url
          })
          this.details = this.personDetails[0];
          // console.info('details: ',this.details);
        })
  }

  processForm(form: NgForm){
    // console.info(form.value.comment);
    // this.comment = form.value.comment;
    // db.table('comment').pu
    // db.table('comment').put(form.value.comment);
    // console.info('inserted: ', db);
    this.dexieSvc.addComment(form.value)
    .then((result) => {
      console.log('inserted: ', result);
      //need to pull from indexDB, not from result
      // this.comment = result;
    })//then
    .catch(error => {
      console.log('Error: ', error);
    })  
  }

  loadComment(){
    this.dexieSvc.getComment()
        .then((result) => {
          console.log('loadcomment: ', result);
          this.comment = result[0].comment;
          console.log('loadcomment: ', this.comment);
        })
  }
}
