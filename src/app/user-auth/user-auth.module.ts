import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLoginComponent } from './modules/login/page/page.component';
import { FormLoginComponent } from './modules/login/components/form/form.component';

@NgModule({
  declarations: [
    PageLoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserAuthModule { }
