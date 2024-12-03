
import { Component } from '@angular/core';
import { LoginService } from '../services/page.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { userToken } from 'src/app/user-auth/interfaces/userToken';
import { userLogin } from 'src/app/user-auth/interfaces/userLogin';
import { SharingService } from 'src/app/shared/service/sharing.service';
import { UserInfoService } from 'src/app/shared/service/user-info.service';

@Component({
  selector: 'login-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageLoginComponent {
  public data$: Observable<userToken>;
  public user!: userLogin;
  public token?: userToken;
  public error_inputs: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private sharingService: SharingService,
    private userInfoService: UserInfoService

  ) {

    this.data$ = sharingService.SharingToken;


  }

  captureUserEmiter(userLogin: userLogin): void {

    this.verifyUser(userLogin);

  }


  verifyUser(user: userLogin): void {
    this.loginService.verifyUser(user).subscribe(
      (token) => {

        if (token == null) {
          this.error_inputs = true;

        } else {
          this.error_inputs = false;
          let user_id = jwtDecode(token.token).jti;
          if (user_id) {
            this.sharingService.SharingTokenData = { token: token.token, userId: parseInt(user_id) }

            this.userInfoService.findUserInfo().subscribe((user) => {
              const rol = user.role;

              switch (rol) {
                case "ADMIN":
                  this.router.navigateByUrl('/user/admin/dashboard');
                  break;

                case "CONSULTOR":
                  this.router.navigateByUrl('/user/consultor/dashboard');
                  break;

                  case "GESTIONADOR":
                    this.router.navigateByUrl('/user/gestionador/dashboard');
                    break;

                    case "AUDITOR":
                      this.router.navigateByUrl('/user/auditor/dashboard');
                      break;
              }

            })
            // this.router.navigateByUrl('/user/admin/dashboard');
          }


        }
      }
    );
  }


}
