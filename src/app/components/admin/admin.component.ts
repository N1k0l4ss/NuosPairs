import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public existingGroup: boolean = true;

  constructor(
      public appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    this.appComponent.initSimpleData();
    this.appComponent.initGroups();
  }

  enterGroupClicked() {
    this.existingGroup = !this.existingGroup;
  }
}
