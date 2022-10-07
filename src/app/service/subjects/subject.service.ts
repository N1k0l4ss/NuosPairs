import { Subject } from './subject';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiServiceUrl = 'https://spring-pairs.herokuapp.com/pairs';
// private apiServiceUrl = 'http://localhost:8080/pairs';

  constructor(private http: HttpClient) { }

  public getSubjects(group: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiServiceUrl}/${group}`)
  }

  public getSubjectsByParam(group: String, param: String): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiServiceUrl}/${group}/${param}`)
  }
}