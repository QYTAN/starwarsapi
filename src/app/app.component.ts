import { Component } from '@angular/core';
import { StarwarsService } from './starwars.service';
import { Categories } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwarsapi';

  constructor(){}

  // getCategories(){
  //   this.starwarsSvc.getCategories()
  //       .then(result=>{
  //         console.info('result: ', result);
  //       })
  // }
}
