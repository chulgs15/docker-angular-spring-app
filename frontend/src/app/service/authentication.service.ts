import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EbizJwtToken } from '../interface/ebiz-jwt-token';

class LoginDto {
  id: string;
  password: string;

  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(id: string, password: string): Observable<EbizJwtToken> {
    return this.http.post<EbizJwtToken>('/api/user/loginProcess', {userName : id, password : password});
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public setUserInfo(id: string): void {
    sessionStorage.setItem('u', id);
  }

  public getUserId(): string {
    return sessionStorage.getItem('u');
  }

  public getToken(): string {
    return sessionStorage.getItem('t');
  }
}
