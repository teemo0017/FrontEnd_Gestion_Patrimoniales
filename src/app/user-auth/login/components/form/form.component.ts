import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { userLogin } from '../../../interfaces/userLogin';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormLoginComponent {


  @Output()
  public userEmiter : EventEmitter<userLogin> = new EventEmitter();


  @Input()
  public error_inputs : boolean = false;

  user: userLogin = {
    username: '',
    password : ''
  }


  emitUser(): void{
      this.userEmiter.emit(this.user);

  }


  }

