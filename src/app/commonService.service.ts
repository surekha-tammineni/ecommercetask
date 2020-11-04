import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseU_url = 'https://www.mocky.io/v2/5eda4003330000740079ea60'

  constructor(private http: HttpClient) { }

  getData( data?: any): Observable<any> {
    return this.http.get(`https://www.mocky.io/v2/5eda4003330000740079ea60`,data
    );
  }

}
