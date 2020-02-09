import { Component, OnInit } from '@angular/core';
import {KorisniciService} from './korisnici.service';
import {Observable} from 'rxjs';
import {KorisniciZahtev} from './korisnici-zahtev';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.scss']
})
export class KorisniciComponent implements OnInit {

  korisnici: Observable<Array<KorisniciZahtev>>;

  constructor(private korisniciService: KorisniciService) { }

  ngOnInit() {
     this.korisnici = this.korisniciService.sviKorisnici();
  }

}
