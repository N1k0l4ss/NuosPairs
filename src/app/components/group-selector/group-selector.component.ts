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
  public groups: Number[] = [];

  constructor(private http: HttpClient, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.initGroups();
  }

  selectGroup(group: Number){
    this.appComponent.group = group;
    this.appComponent.query = 'today';
  }

  initGroups(): void {
      this.http.get<Number[]>(this.apiServiceUrl).subscribe(
        (response: Number[]) => {
          this.groups = response
        }
    )
  }

}
