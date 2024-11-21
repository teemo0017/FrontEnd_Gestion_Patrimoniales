import { Component } from '@angular/core';
import { LoginService } from '../services/page.service';
import { userLogin } from '../../interfaces/userLogin';
import { userToken } from '../../interfaces/userToken';
import { Router } from '@angular/router';
import {jwtDecode } from 'jwt-decode';
import { SharingService } from '../../../shared/service/sharing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageLoginComponent {
  public data$ : Observable<userToken>;
  public user! : userLogin;
  public token? : userToken;
  public error_inputs:boolean = false;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private sharingService : SharingService

  ){

    this.data$ = sharingService.SharingToken;


  }

  captureUserEmiter(userLogin : userLogin) : void{

    this.verifyUser(userLogin);

  }


  verifyUser(user : userLogin): void{
    this.loginService.verifyUser(user).subscribe(
      (token) => {

        if(token == null){
           this.error_inputs = true;

        }else{
          this.error_inputs = false;
         let user_id = jwtDecode(token.token).jti;
         if(user_id){
          this.sharingService.SharingTokenData = {token : token.token , userId: parseInt(user_id)}
         }
         this.router.navigateByUrl('/user/dashboard');

        }
      }
    );
  }


}
