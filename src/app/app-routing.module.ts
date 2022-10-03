import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";
import {GroupSelectorComponent} from "./components/group-selector/group-selector.component";

const routes: Routes = [
  { path: '', component: GroupSelectorComponent },
  { path: 'page404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
