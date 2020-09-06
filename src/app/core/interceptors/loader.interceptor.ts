import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../services';
import { AuthService } from '../authantication/auth.service';
@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private _loaderService: LoaderService, private _authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        if(this._authService.getToken){
            req = req.clone({
                setHeaders: {
                    Authorization: this._authService.getToken
                }
            })
        }
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                this.onEnd();
            }));
    }
    private onEnd(): void {
        this.hideLoader();
    }
    private showLoader(): void {
        this._loaderService.show();
    }
    private hideLoader(): void {
        this._loaderService.hide();
    }
}