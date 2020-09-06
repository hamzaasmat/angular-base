import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as menu from './menu-helper';
import { AuthService } from 'src/app/core/authantication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  
  constructor(
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
    private _router: Router,
  ) { }
  userMenu = menu.menu;
  events: string[] = [];
  opened: boolean = true;
  check:boolean=true;
  indexMatched: number = null;
  panelOpenState = false;
  navbarTitle = menu.title;

  ngOnInit() {
    // this._snackBar.open('Hello','ok', {
    //   duration: 10000,
    // });
  }
  openSubMenu(i){
    this.indexMatched = i;
  }
  closeSubMenu() {
    this.indexMatched = null;
    console.log(this.indexMatched)
  }
  checkFn(){
    this.check = !this.check
  }

  logout(){
    this._authService.Logout;
    this._router.navigate(['/login'])
  }
  ngAfterViewInit(){
    
  }

}
