import { Component } from '@angular/core';
import { SharingService } from '../../service/sharing.service';
import { Observable } from 'rxjs';
import { userToken } from 'src/app/user-auth/interfaces/userToken';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public data$ : Observable<userToken>;

  constructor(
    private router: Router,
    private sharingService : SharingService


  ){
    this.data$ = sharingService.SharingToken;
  }


  logout(){
  //   let uwu : number ;
  //   this.data$.subscribe( (token) => { uwu = token.userId});
  //  console.log("aqui"+uwu!);
    this.sharingService.SharingTokenData = {token : '' , userId : 0};
    this.router.navigateByUrl('');
  }
}

