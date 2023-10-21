import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShuffleSortComponent } from './assignment/shuffle-sort/shuffle-sort.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shuffle-sort', component: ShuffleSortComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
