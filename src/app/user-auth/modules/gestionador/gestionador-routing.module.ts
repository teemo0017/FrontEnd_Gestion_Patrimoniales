import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarBienComponent } from './agregar-bien/agregar-bien.component';
import { EditarBienComponent } from './editar-bien/editar-bien.component';
import { ListaBienesComponent } from './lista-bienes/lista-bienes.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registrar/bien',
    component: AgregarBienComponent
  },
  {
    path: 'editar/bien/:id',
    component: EditarBienComponent
  },
  {
    path: 'lista/bienes',
    component: ListaBienesComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionadorRoutingModule { }
