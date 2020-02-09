import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KorisniciRoutingModule } from './korisnici-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {KorisniciComponent} from './korisnici.component';


@NgModule({
  declarations: [KorisniciComponent],

  imports: [
    CommonModule,
    KorisniciRoutingModule,
    SharedModule,
  ]
})
export class KorisniciModule { }
