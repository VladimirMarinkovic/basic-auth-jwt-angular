import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../../demo/pages/authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    console.log('Uspesno ste se izlogovali!');
    this.router.navigateByUrl('/auth/signin');
  }
}
