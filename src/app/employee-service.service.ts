import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable ,of } from 'rxjs';
import { IEmp } from './emp';



@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._url);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}