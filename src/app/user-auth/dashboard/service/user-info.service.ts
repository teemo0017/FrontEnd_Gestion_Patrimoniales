import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userToken } from '../../interfaces/userToken';
import { userInfo } from '../../interfaces/userInfo';
import { SharingService } from 'src/app/shared/service/sharing.service';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public data$ : Observable<userToken>;
  private apiUrl : string = 'http://localhost:4000';
  private endpointFindInfoUserById : string = '/user';


  constructor(
    private http:HttpClient,
    private sharingService : SharingService)
    {
      this.data$ = sharingService.SharingToken;
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
