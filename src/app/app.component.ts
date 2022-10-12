import {Component} from '@angular/core';
import {Subject} from "./service/subjects/subject";
import {HttpErrorResponse} from "@angular/common/http";
import {SubjectService} from "./service/subjects/subject.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public group: String | null = null;
  public query: String = '';
  public subjects: Subject[] = [];
  public nearTimingSubjects: Subject[] = [];
  public isNextWeek = false;

    public static apiServiceUrl = 'https://spring-pairs.herokuapp.com/pairs';
// public static apiServiceUrl = 'http://localhost:8080/pairs';

  constructor(private subjectService: SubjectService) {
  }

  public fillSubjects() {
      if (this.group == null)
          return;

      this.getSubjectsByParam(this.group, this.query + (this.isNextWeek ? '/next' : ''));
      this.getNearTimingSubject(this.group);
  }

  private getSubjectsByParam(group: String, param: String): void {
    this.subjectService.getSubjectsByParam(group, param).subscribe(
        (response: Subject[]) => {
          this.subjects = response;
        }, (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
  }

  private getNearTimingSubject(group: String): void {
    this.subjectService.getSubjectsByParam(group, 'prev').subscribe(
        (response: Subject[]) => {
          this.nearTimingSubjects[0] = response[0];
        }, (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
    this.subjectService.getSubjectsByParam(group, 'now').subscribe(
        (response: Subject[]) => {
          this.nearTimingSubjects[1] = response[0];
        }, (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
    this.subjectService.getSubjectsByParam(group, 'next').subscribe(
        (response: Subject[]) => {
          this.nearTimingSubjects[2] = response[0];
        }, (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
  }

}