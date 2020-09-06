import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/shared';
import { Safe } from 'src/app/core/pipes/safe';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { Notfound404Component } from './notfound404/notfound404.component';


@NgModule({
  declarations: [MainComponent, Safe, Notfound404Component],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  providers:[
    AuthGuard
  ]
})
export class MainModule { }
