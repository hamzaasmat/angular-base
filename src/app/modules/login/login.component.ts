import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models';
import { AuthService } from 'src/app/core/authantication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }
  public returnUrl: string;
  public passwordToggle: boolean = false;
  public auth: Login = {
    email: 'admin@gmail.com',
    password: '1234abcd'
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    if (this._authService.getToken) {
      this._router.navigate(['/admin']);
    }
  }

  viewPassword() {
    this.passwordToggle = !this.passwordToggle;
  }

  login() {
    this._authService.userLogin(this.auth).subscribe(response => {
      // console.log(JSON.stringify(response));
      if (response) {
        // debugger
        this._router.navigate(['/admin'])
        localStorage.setItem('token', response.data.token)
      }

    })
  }

}
