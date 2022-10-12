import { Subject } from './subject';
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
    return this.http.get<Subject[]>(`${AppComponent.apiServiceUrl}/${group}`)
  }

  public getSubjectsByParam(group: String, param: String): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${AppComponent.apiServiceUrl}/${group}/${param}`)
  }
}