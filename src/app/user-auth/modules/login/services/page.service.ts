import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,of,catchError } from 'rxjs';
import { userLogin } from 'src/app/user-auth/interfaces/userLogin';
import { userToken } from 'src/app/user-auth/interfaces/userToken';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private apiUrl : string = 'http://localhost:4000';
  private endpoint : string = '/auth/login';



  verifyUser( user : userLogin) : Observable<userToken | null>{

    const url = this.apiUrl+this.endpoint;

    return this.http.post<userToken>(url,user).pipe(catchError ( ()=> of(null)));
  }
}
