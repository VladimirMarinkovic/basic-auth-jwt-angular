import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KorisniciZahtev} from './korisnici-zahtev';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  private url = 'http://localhost:8080/api/korisnici/';

  constructor(private  httpClient: HttpClient) { }

  sviKorisnici(): Observable<Array<KorisniciZahtev>> {
    return  this.httpClient.get<Array<KorisniciZahtev>>(this.url + 'svi-korisnici');
  }
}
