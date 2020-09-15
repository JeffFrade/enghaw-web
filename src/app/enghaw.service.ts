import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EnghawService {
  public url = environment.api_host;

  constructor(private http:HttpClient) { }

  public searchLetter(text:string): Observable<any> {
    let url = this.url + 'music?text=' + text;
    return this.http.get<any>(url);
  } 
}
