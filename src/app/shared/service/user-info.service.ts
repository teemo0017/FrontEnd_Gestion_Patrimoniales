import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SharingService } from 'src/app/shared/service/sharing.service';
import { Observable,  } from 'rxjs';
import { userToken } from 'src/app/user-auth/interfaces/userToken';
import { userInfo } from 'src/app/user-auth/interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public data$ : Observable<userToken>;
  private apiUrl : string = 'http://localhost:4000';
  private endpointFindInfoUserById : string = '/user';
  private endpointFindAllInfoUserById : string = '/findallusers';


  constructor(
    private http:HttpClient,
    private sharingService : SharingService)
    {
      this.data$ = sharingService.SharingToken;
     }




  findAllUserInfo() : Observable<userInfo[]>{

    let token_id : string = sessionStorage.getItem('jwt_token')!;
    let user_id : string = sessionStorage.getItem('user_id')!;

    const url = `${this.apiUrl}${this.endpointFindInfoUserById}${this.endpointFindAllInfoUserById}`;

   return this.http.get<userInfo[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      })
  }

  findUserInfo() : Observable<userInfo>{

    let token_id : string = sessionStorage.getItem('jwt_token')!;
    let user_id : string = sessionStorage.getItem('user_id')!;

      const url = `${this.apiUrl}${this.endpointFindInfoUserById}/${user_id}`;

   return   this.http.get<userInfo>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      })
  }
}
