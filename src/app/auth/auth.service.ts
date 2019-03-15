import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import * as auth0 from 'auth0-js';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthResult } from './state/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: '3IMbQhqm5kEP4r6C9u0BOxA1vbtj4K2P',
    domain: 'luoluojy.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4100/callback',
    scope: 'openid'
  });
  constructor(private store: Store) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public oauthLogin(): void {
    this.auth0.authorize();
  }

  login(username, password): Observable<AuthResult> {
    const accessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkxNTQxNTgyMzAwfQ.qnXX6C-tDWr3vxHDZfMflH2oJGhYJjhVczw0bMUF0lo',
      refreshToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1luIiwiaWF0IjoxNTQxNTgyMzAwfQ.qnXX6C-tDWr3vxHDZfMflH2oJGhYJjhVczw0bMUF0lo';
    return of({
      token: { access_token: accessToken, refresh_token: refreshToken },
      username: username,
      expires_at: moment()
        .add(1, 'm')
        .format('YYYY-MM-DD HH:mm:ss')
    }).pipe(
      delay(1000)
      // tap(val => (this.isLoggedIn = true))
    );
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(1000)
      // tap(val => (this.isLoggedIn = false))
    );
  }
}
