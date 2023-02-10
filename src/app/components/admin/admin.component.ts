import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Subject, Timing, WeekDay} from "../../service/subjects/subject";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public existingGroup: boolean = true;

  public group: String | undefined;
  public day: WeekDay | undefined;
  public subjects: Subject[] | undefined;

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

  selectGroup(group: String) {
    this.group = group;
  }

  enterGroup($event: any) {
    this.group = $event.target.value;
  }

  selectDay(day: WeekDay) {
    this.day = day;
    if (this.group != null) {
      this.appComponent.subjectService.getSubjectsByParam(this.group, `${day.title}/both`).subscribe(
          (response: Subject[]) => {
              this.subjects = response;
          }, (error: HttpErrorResponse) => {
            this.subjects = undefined;
          }
      );
    }
  }

  getSubjectsByTiming(timing: Timing): String {
    let result = '';
    for (let subject of this.subjects ?? []) {
      if (subject.timing.id === timing.id) {
        result += subject.title + ' | ';
      }
    }

    return result.replace(/ \| $/g, " ");
  }

  clickedSubject(subjectsByTiming: String) {
    // let dialogRef = dialog.open(UserProfileComponent, { TODO Popup
    //   height: '400px',
    //   width: '600px',
    // });
  }
}
