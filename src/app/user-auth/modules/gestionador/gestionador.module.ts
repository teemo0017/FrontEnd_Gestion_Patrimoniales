import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionadorRoutingModule } from './gestionador-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarBienComponent } from './agregar-bien/agregar-bien.component';
import { ListaBienesComponent } from './lista-bienes/lista-bienes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarBienComponent } from './editar-bien/editar-bien.component';


@NgModule({
  declarations:[DashboardComponent,AgregarBienComponent,ListaBienesComponent,EditarBienComponent],
  imports: [
    GestionadorRoutingModule,
    CommonModule,FormsModule,ReactiveFormsModule]
})
export class GestionadorModule { }
