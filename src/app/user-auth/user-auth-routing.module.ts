import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page.component';
import { PageRegisterComponent } from './register/page/page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPetsComponent } from './dashboard/components/add-pets/add-pets.component';
import { AddCitaComponent } from './dashboard/components/add-cita/add-cita.component';
import { EditPetsComponent } from './dashboard/components/edit-pets/edit-pets.component';
import { ListBienesComponent } from './dashboard/components/lista-bienes/list-bienes.component';


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'register',
    component: PageRegisterComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register/pet',
    component : AddPetsComponent
  },  {
    path: 'register/cite',
    component : AddCitaComponent
  },
  {
    path: 'edit/pet/:id',
    component : EditPetsComponent
  },
  {
    path: 'list/bienes',
    component : ListBienesComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
