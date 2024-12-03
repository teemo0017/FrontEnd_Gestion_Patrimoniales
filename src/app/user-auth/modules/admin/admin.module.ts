import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AdminRoutingModule } from './admin-routing.module';
import { PageRegisterComponent } from './register/page/page.component';
import { FormRegisterComponent } from './register/components/form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarBienComponent } from './agregar-bien/agregar-bien.component';
import { EditarBienComponent } from './editar-bien/editar-bien.component';
import { ListaBienesComponent } from './lista-bienes/lista-bienes.component';


@NgModule({
  declarations: [
    PageRegisterComponent,
    FormRegisterComponent,
    DashboardComponent,
    AgregarBienComponent,
    ListaBienesComponent,
    EditarBienComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
