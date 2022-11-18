import {Subject, Timing, WeekDay} from './subject';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppComponent} from "../../app.component";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public getSubjects(group: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${AppComponent.apiServiceUrl}/pairs/${group}`)
  }

  public getSubjectsByParam(group: String, param: String): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${AppComponent.apiServiceUrl}/pairs/${group}/${param}`)
  }

  public getTimings(): Observable<Timing[]> {
    return this.http.get<Timing[]>(`${AppComponent.apiServiceUrl}/pairs/timings`)
  }

  public getDays(): Observable<WeekDay[]> {
    return this.http.get<WeekDay[]>(`${AppComponent.apiServiceUrl}/pairs/days`)
  }

  getGroups(): Observable<String[]> {
    return this.http.get<String[]>(AppComponent.apiServiceUrl + '/pairs/groups')
  }
}