import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistracijaZahtev} from './registracija-zahtev';
import {Observable} from 'rxjs';
import {LoginZahtev} from './login-zahtev';
import {JwtAuthResponse} from './jwt-auth-response';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) { }

  registracija(registracijaZahtev: RegistracijaZahtev): Observable<any> {
    return this.httpClient.post(this.url + 'registracija', registracijaZahtev);
  }

  login(loginZahtev: LoginZahtev): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url + 'login', loginZahtev).pipe(map(data => {
      this.localStoraqeService.store('authenticationToken', data.authenticationToken);
      this.localStoraqeService.store('username', data.username);
      return true;
    }));
  }

  isAuthenticated(): boolean {
    console.log('PROVERA');
    console.log('PROVERA');
    return this.localStoraqeService.retrieve('username') != null;
  }

  logout() {
    this.localStoraqeService.clear('authenticationToken');
    this.localStoraqeService.clear('username');
  }
}
