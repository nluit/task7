import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  public newdate :string ;
  public appUrl : string =  'https://api.nasa.gov/EPIC/api/natural/date/';
  public api_key :string ='?api_key=8GgBzcZB0VL54TcsPN8TdOjdI8ozjLKW9utbpNR8';
  constructor(private _http: HttpClient) { }
  
  getData (date) : Observable<any> {
    return this._http.get( this.appUrl+date+this.api_key);
  }
  
}
