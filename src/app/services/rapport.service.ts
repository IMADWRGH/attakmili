import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const API_URL = "http://localhost:8080/api/rapport";
@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http: HttpClient) { }

  getAllData(page: number, size: number): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/all?page=${page}&size=${size}`);
  }

  generateFile(): Observable<string> {
    return this.http.post<string>(`${API_URL}/file`, null, { responseType: 'text' as 'json' });
  }

}
