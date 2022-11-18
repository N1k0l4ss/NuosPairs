import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent implements OnInit {


  constructor(private http: HttpClient, public appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.appComponent.initGroups();
  }

  selectGroup(group: String){
    this.appComponent.group = group;
    this.appComponent.query = 'today';
    this.appComponent.fillSubjects();
    this.appComponent.nearTimingSubjects = null;
    this.appComponent.getNearTimingSubject(group);
  }

}
