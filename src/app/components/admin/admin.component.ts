import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {WeekDay} from "../../service/subjects/subject";

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

  isGroupsEmpty(): boolean {
    return this.appComponent.groups === null || this.appComponent.groups.length === 0;
  }

  enterGroupClicked() {
    this.existingGroup = !this.existingGroup;
  }
}
