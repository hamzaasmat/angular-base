import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError, first } from 'rxjs/operators';
import { EndPoints } from './index';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }
  private errorMessage = null
  protected get headers() {
    let headers = {
      'Content-Type': 'application/json',
    }
    return headers;
  }

  protected get(relativeUrl: string): Observable<any> {
    return this._http.get(EndPoints.baseURL + relativeUrl)
      .pipe(
        first(),
        catchError(this.handleError.bind(this))
      );

  }

  protected post(relativeUrl: string, body?: any, headers?: any): Observable<any> {
    return this._http.post(EndPoints.baseURL + relativeUrl, body, { headers: headers })
      .pipe(
        first(),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: any) {
    // console.log(error)
    this.errorMessage = error.error.message ? error.error.message : error.message;
    this._snackBar.open(this.errorMessage, 'Ok')
    return throwError(this.errorMessage);
  }
}
