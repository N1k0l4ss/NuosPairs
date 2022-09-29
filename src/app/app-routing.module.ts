import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectsComponent} from "./components/subjects/subjects.component";
import {Page404Component} from "./components/page404/page404.component";

const routes: Routes = [
  { path: '', component: SubjectsComponent },
  // { path: ':group', component: AllGroupPairsComponent },
  { path: ':group/:params', component: SubjectsComponent },
  { path: ':group/:params/:week', component: SubjectsComponent },
  { path: 'page404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
