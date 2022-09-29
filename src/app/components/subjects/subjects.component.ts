import {Component, OnInit} from '@angular/core';
import {Subject} from "../../service/post/subject";
import {SubjectService} from "../../service/post/subject.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as moment from "moment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    public subjects: Subject[] = [];

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

    ngOnInit(): void {
      let strings = this.router.url.split('/');
       if (strings.length > 2) {
           this.getSubjectsByParam(Number(strings[1]), strings[2] + '/' + strings[3]);
       }
    }
}
