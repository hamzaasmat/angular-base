import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { HttpRestService } from '@services';
import { EndPoints } from '@services';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpRestService {

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
