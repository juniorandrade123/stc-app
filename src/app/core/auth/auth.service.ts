import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  _currentUser = new BehaviorSubject<any>(this.tokenPayload);

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  clear() {
    localStorage.clear();
  }

  get loggedIn() {
    return !!this.tokenPayload; 
  }

  get isTokenExpired() {
    let expiration = this.tokenPayload.exp;
    if (expiration === undefined) return false;
    return !(expiration > (Date.now() / 1000));
  }

  get currentUser() {
    return this._currentUser.asObservable();
  }

  get typeUser() {
    if (!!this.tokenPayload) {
      return this.tokenPayload.typeUser;
    }
    return '';
  }

  get token() {
    return localStorage.token;
  }

  get tenantList() {
    return localStorage.tenantList;
  }

  get tenantID() {
    return localStorage.tenantID;
  }

  get tenantOK() {
    return localStorage.tenantOK;
  }

  get idUser() {
    return this.tokenPayload.id;
  }

  get roles(): string[] {
    if (!!this.tokenPayload.roles) {
      return (this.tokenPayload.roles as string).split(',');
    }
    return [];
  }

  get typeEntity() {
    if (!!this.tokenPayload) {
      return this.tokenPayload.typeEntity;
    }
    return '';
  }

  set token(value) {
    localStorage.setItem('token', value);
    this._currentUser.next(this.tokenPayload);
  }

  set tenantList(value) {
    localStorage.setItem('tenantList', value);
  }

  set tenantID(value) {
    localStorage.setItem('tenantID', value);
  }

  set tenantOK(value) {
    localStorage.setItem('tenantOK', value);
  }

  private get tokenPayload() {
    try {
      return this.jwtHelper.decodeToken(this.token);
    } catch (error) {
      return null;
    }
  }
}
