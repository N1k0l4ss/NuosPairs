import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
    selector: 'app-subjects-component',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

    public nearTimingsTitle = ['Previous pair', 'Pair now', 'Next pair'];

    constructor(
        private router: Router,
        public appComponent: AppComponent) {
        let urlParams = router.url.substring(1).split('/');
        appComponent.group = urlParams[0];
        appComponent.query = 'today';
        appComponent.fillSubjects();
    }

    ngOnInit(): void {
    }

}
