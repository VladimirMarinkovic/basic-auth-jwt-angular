import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegistracijaZahtev} from '../registracija-zahtev';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  registracijaForma: FormGroup;
  registracijaZahtev: RegistracijaZahtev;

  constructor(private formBulder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registracijaForma = this.formBulder.group({
      username: '',
      email: '',
      password: ''
    });
    this.registracijaZahtev = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registracijaZahtev.username = this.registracijaForma.get('username').value;
    this.registracijaZahtev.email = this.registracijaForma.get('email').value;
    this.registracijaZahtev.password = this.registracijaForma.get('password').value;

    this.authService.registracija(this.registracijaZahtev).subscribe(data => {
      console.log('Uspesna registracija');
      this.router.navigateByUrl('/auth/signin');
      }, error => {
      console.log('Registracija neuspesna!');
      this.router.navigateByUrl('/auth/signup');
    });
  }

}
