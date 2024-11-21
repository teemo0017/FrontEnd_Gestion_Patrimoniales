import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userToken } from 'src/app/user-auth/interfaces/userToken';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private TOKEN_KEY = 'jwt_token';
  private USER_ID = 'user_id'
  private sharingObservableToken: BehaviorSubject<userToken> = new BehaviorSubject<userToken>({token : '' , userId : 0});

  constructor() {

    const value = sessionStorage.getItem(this.TOKEN_KEY);
    const value2 = sessionStorage.getItem(this.TOKEN_KEY);

    if (value && value2) {
      let token : userToken = {
        token: value,
        userId: parseInt(value2)
      }
      this.sharingObservableToken.next(token);
    }

   }

  get SharingToken(){
    return this.sharingObservableToken.asObservable();
  }

  set SharingTokenData(token : userToken ){

    if (token) {
      sessionStorage.setItem(this.TOKEN_KEY, token.token);
      sessionStorage.setItem(this.USER_ID,token.userId!.toString());
      this.sharingObservableToken.next(token);
    }


  }
}
