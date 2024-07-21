import {Injectable} from '@angular/core';
import {environment} from "../../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:  string = environment.baseUrlDevelop;
  private loggedIn: boolean = false;

  constructor(private http: HttpClient){}


  login(email: string, password: string): Observable<any> {
    const url: string = `${this.baseUrl}/auth/login`;

    const body = {
      email, password
    }

    return this.http.post(url, body, {responseType: "text"}).pipe(
      map((response) => {
        this.setLoggedIn(true);
        return response;
      }),
      catchError((error) => {
        const errorMessage: string = 'Usuario o contraseña incorrectos';
        console.log('Error de inicio de sesión: ', errorMessage);
        console.log('ENTRO AL AUTH')
        return throwError(errorMessage);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean):void {
    this.loggedIn = value;
  }

}
