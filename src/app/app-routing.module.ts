import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { RapportComponent } from './rapport/rapport.component';
import { Routes } from '@angular/router'; 


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home - page' },
  { path: 'detail', component: DetailComponent, title: 'Liste Detail - page' },
  { path: 'rapport', component: RapportComponent, title: 'Rapport - page' },

  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
