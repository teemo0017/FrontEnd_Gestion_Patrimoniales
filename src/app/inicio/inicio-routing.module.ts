import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicioComponent } from './page/page.component';



const routes: Routes = [
  {
    path: 'inicio',
    component: PageInicioComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
