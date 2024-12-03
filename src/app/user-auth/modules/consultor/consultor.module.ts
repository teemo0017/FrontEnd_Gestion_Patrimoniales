import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultorRoutingModule } from './consultor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations:[DashboardComponent],

  imports: [
    CommonModule,
    ConsultorRoutingModule,
  ]
})
export class ConsultorModule { }
