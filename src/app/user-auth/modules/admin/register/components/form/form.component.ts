import { Component, EventEmitter, Output } from '@angular/core';
import { userRegister } from '../../interfaces/userRegister';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormRegisterComponent {

  @Output()
  userEmiter : EventEmitter<userRegister> = new EventEmitter()

   user: userRegister = {
    username : '',
    password: '',
    firstname: '',
    lastname: '',
    country: '',
    email: '',
    phone : '',
    age : '',
    role: ''
  }

  constructor(    private router: Router){

  }
  emitUser(): void{
    this.userEmiter.emit(this.user);

    timer(1500).subscribe(() => {
      this.router.navigateByUrl('/user/admin/dashboard');
    })
}
}
