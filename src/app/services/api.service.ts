import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<any> {
    return this.http.get('http://localhost:1337/players');
  }

  public createTeam(data): Observable<any> {
    return this.http.post('http://localhost:1337/teams', data);
  }

  public getTeams(): Observable<any> {
    return this.http.get('http://localhost:1337/teams');
  }

  public getTeamById(id): Observable<any> {
    return this.http.get('http://localhost:1337/teams/' + id);
  }

  public updateTeamById(id, data): Observable<any> {
    return this.http.put('http://localhost:1337/teams/' + id, data);
  }

  public login(data: { identifier: string, password: string}): Observable<any> {
    return this.http.post('http://localhost:1337/auth/local', data);
  }

  public signup(data: { username: string, email: string, password: string}): Observable<any> {
    return this.http.post('http://localhost:1337/auth/local/register', data);
  }

  public deleteTeam(id): Observable<any> {
    return this.http.delete('http://localhost:1337/teams/' + id);
  }
}
