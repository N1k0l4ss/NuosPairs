import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent implements OnInit {

  private apiServiceUrl = 'https://spring-pairs.herokuapp.com/pairs/groups';
// private apiServiceUrl = 'http://localhost:8080/pairs/groups';
  public groups: String[] = [];

  constructor(private http: HttpClient, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.initGroups();
  }

  selectGroup(group: String){
    this.appComponent.group = group;
    this.appComponent.query = 'today';
    this.appComponent.fillSubjects();
  }

  initGroups(): void {
      this.http.get<String[]>(this.apiServiceUrl).subscribe(
        (response: String[]) => {
          this.groups = response
        }
    )
  }

}
