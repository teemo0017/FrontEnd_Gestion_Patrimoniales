import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)
  }
  ,
  {
    path: '**',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
