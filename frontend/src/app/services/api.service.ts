import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id?: number;
  name: string;
  address?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/api/projects'; // proxied in dev

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  createProject(p: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, p);
  }
}
