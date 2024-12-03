import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditorRoutingModule } from './auditor-routing.module';


@NgModule({
  declarations:[DashboardComponent],

  imports: [
    CommonModule,
    AuditorRoutingModule
  ]
})
export class AuditorModule { }
