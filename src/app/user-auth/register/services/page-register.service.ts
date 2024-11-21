import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userRegister } from '../interfaces/userRegister';
import { catchError, Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  private apiUrl : string = 'http://localhost:4000';
  private endpoint : string = '/auth/register';



  verifyUser(user : userRegister) : Observable<userRegister | null> {
    const url = this.apiUrl+this.endpoint;
     return this.http.post<userRegister>(url,user).pipe(catchError ( ()=> of(null)));
  }
}
