import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

const ROUTES: Route[]=[
    {path:"", component: CategoriesComponent},
    {path:"home", component: CategoriesComponent},
    {path:"people", component: ItemsComponent},
    {path:"people/:personid", component: DetailsComponent},
    {path:"planets", component: ItemsComponent},
    {path:"films", component: ItemsComponent},
    {path:"species", component: ItemsComponent},
    {path:"starships", component: ItemsComponent},
    {path:"vehicles", component: ItemsComponent},
    
]

@NgModule ({
    imports: [ RouterModule.forRoot(ROUTES)],
    exports: [ RouterModule]
})

export class AppRouteModule{}