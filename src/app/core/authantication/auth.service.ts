import { Injectable } from '@angular/core';
import { HttpService, EndPoints } from '../services';
import { Login } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

    public userLogin(data: Login): Observable<any>{
        let body = JSON.stringify({
            "email": data.email,
            "password": data.password
        })
        return this.post(EndPoints.login, body)
    }

    public get Logout(){
        return localStorage.removeItem('token')
    }

    public get getToken() {
        return localStorage.getItem('token');
    }

}
