import {Component, OnInit} from '@angular/core';
import {Subject} from "../../service/post/subject";
import {SubjectService} from "../../service/post/subject.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    public subjects: Subject[] = [];
    public nearTimingSubjects: Subject[] = [];
    public nearTimingsTitle = ['Previous pair', 'Pair now', 'Next pair'];

    constructor(private subjectService: SubjectService,
              private router: Router) {
    }

    public getSubjectsByParam(group: number, param: string): void {
        this.subjectService.getSubjectsByParam(group, param).subscribe(
            (response: Subject[]) => {
              this.subjects = response;
            }, (error: HttpErrorResponse) => {
              alert(error.message)
            }
        );
    }

    public getNearTimingSubject(group: number): void {
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

    ngOnInit(): void {
      let strings = this.router.url.split('/');
       if (strings.length > 2) { // by default
           this.getSubjectsByParam(Number(strings[1]), strings[2] + '/' + strings[3]);
           ///
           this.getNearTimingSubject(Number(strings[1]));
       }
    }
}
