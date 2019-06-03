import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { StarwarsService } from './starwars.service';
import { DexieService } from './dexie.service';
import { AppRouteModule } from './approute.module';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    DetailsComponent,
    CategoriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    AppRouteModule,
    BrowserAnimationsModule,
    
  ],
  providers: [StarwarsService, DexieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
