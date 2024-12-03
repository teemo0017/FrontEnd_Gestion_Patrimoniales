import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './modules/login/page/page.component';


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
    {
    path: 'consultor',
    loadChildren: () => import('./modules/consultor/consultor.module').then(m => m.ConsultorModule)
  },
  {
    path: 'gestionador',
    loadChildren: () => import('./modules/gestionador/gestionador.module').then(m => m.GestionadorModule)
  },
  {
    path: 'auditor',
    loadChildren: () => import('./modules/auditor/auditor.module').then(m => m.AuditorModule)
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
