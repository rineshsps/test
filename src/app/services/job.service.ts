import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobList() : Observable<any> {
    return this.http.get<any>('/api/Schedulers/1/users')
  }

  private handleError(errorResponse: HttpErrorResponse): void{
    if(errorResponse.error instanceof ErrorEvent){
      console.log('client sude error', errorResponse.error.message);
    }else{
      console.log('server error', errorResponse);
    }
  }
}
