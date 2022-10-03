import {Component, OnInit} from '@angular/core';
import {Subject} from "../../service/subjects/subject";
import {SubjectService} from "../../service/subjects/subject.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
    selector: 'app-subjects-component',
    templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    public subjects: Subject[] = [];
    public nearTimingSubjects: Subject[] = [];
    public nearTimingsTitle = ['Previous pair', 'Pair now', 'Next pair'];

    constructor(private subjectService: SubjectService,
                private router: Router,
                private appComponent: AppComponent) {
    }

    ngOnInit(): void {
        this.watcher();
    }

    async watcher() {
        while (true) { // Temporary method
            await this.delay(100);
            this.getSubjectsByParam(this.appComponent.group, this.appComponent.query);
            this.getNearTimingSubject(this.appComponent.group);
        }
    }

    delay(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public getSubjectsByParam(group: Number, param: String): void {
        this.subjectService.getSubjectsByParam(group, param).subscribe(
            (response: Subject[]) => {
                this.subjects = response;
            }, (error: HttpErrorResponse) => {
                alert(error.message)
            }
        );
    }

    public getNearTimingSubject(group: Number): void {
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
