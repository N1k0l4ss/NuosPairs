import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent implements OnInit {

  public groups: String[] | null = null;

  constructor(private http: HttpClient, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.initGroups();
  }

  selectGroup(group: String){
    this.appComponent.group = group;
    this.appComponent.query = 'today';
    this.appComponent.fillSubjects();
    this.appComponent.nearTimingSubjects = null;
    this.appComponent.getNearTimingSubject(group);
  }

  initGroups(): void {
      this.http.get<String[]>(AppComponent.apiServiceUrl + '/groups').subscribe( // group
        (response: String[]) => {
          this.groups = response
        }, (error: HttpErrorResponse) => {
            this.groups = null;
          }
    )
  }

}
