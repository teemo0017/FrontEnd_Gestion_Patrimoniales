import { Component } from '@angular/core';
import { userRegister } from '../interfaces/userRegister';
import { RegisterService } from '../services/page-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageRegisterComponent {
  constructor(private RegisterService : RegisterService,
    private router: Router

  ){}





  registerUser(user : userRegister) : void {

    if(user !==null){
      this.RegisterService.verifyUser(user).subscribe(
        (token) => {
          if(token == null){
            console.log('error al intentar registrar usuario');
          }else{
            console.log('loque se mando');
            console.log(user);
            console.log(token);
            this.router.navigateByUrl('/user/login');
          }
        }


      )
    }

  }
}
