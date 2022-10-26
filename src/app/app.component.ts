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
    public subjects: Subject[] | null = null;
    public nearTimingSubjects: Subject[] | null = null;
    public isNextWeek = false;
    private firstInit = true;

    public static apiServiceUrl = 'https://spring-pairs.herokuapp.com/pairs';
// public static apiServiceUrl = 'http://localhost:8080/pairs';

    constructor(private subjectService: SubjectService) {
        this.nearestSubjectsWatcher();
    }

    public fillSubjects() {
        if (this.group == null)
            return;

        this.getSubjectsByParam(this.group, this.query + (this.isNextWeek ? '/next' : ''));
    }

    async nearestSubjectsWatcher() {
        if (this.firstInit) {
            this.firstInit = false;
            await this.delay(100);
        }
        while (true) {
            if (this.group !== null) {
                this.getNearTimingSubject(this.group);
            }
            await this.delay(50000);
        }
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private getSubjectsByParam(group: String, param: String): void {
        this.subjects = null;
        this.subjectService.getSubjectsByParam(group, param).subscribe(
            (response: Subject[]) => {
                this.subjects = response;
            }, (error: HttpErrorResponse) => {
                this.subjects = null;
            }
        );
    }

    private getNearTimingSubject(group: String): void {
        if (this.nearTimingSubjects === null)
            this.nearTimingSubjects = [];

        this.subjectService.getSubjectsByParam(group, 'prev').subscribe(
            (response: Subject[]) => {
                if (this.nearTimingSubjects !== null)
                    this.nearTimingSubjects[0] = response[0];
            }, (error: HttpErrorResponse) => {
                this.nearTimingSubjects = null;
            }
        );
        this.subjectService.getSubjectsByParam(group, 'now').subscribe(
            (response: Subject[]) => {
                if (this.nearTimingSubjects !== null)
                    this.nearTimingSubjects[1] = response[0];
            }, (error: HttpErrorResponse) => {
                this.nearTimingSubjects = null;
            }
        );
        this.subjectService.getSubjectsByParam(group, 'next').subscribe(
            (response: Subject[]) => {
                if (this.nearTimingSubjects !== null)
                    this.nearTimingSubjects[2] = response[0];
            }, (error: HttpErrorResponse) => {
                this.nearTimingSubjects = null;
            }
        );
    }

}