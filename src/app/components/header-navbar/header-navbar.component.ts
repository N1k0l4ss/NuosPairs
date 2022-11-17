import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onClickNav(param: String) {
    this.appComponent.query = param;
    this.appComponent.fillSubjects();
  }

  isCurrent(param: string) {
    return this.appComponent.query === param;
  }

  onClickNext() {
    this.appComponent.isNextWeek = !this.appComponent.isNextWeek;
    this.appComponent.fillSubjects();
  }

  onClickA() {
    this.appComponent.group = null;
  }
}
