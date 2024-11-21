import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPrincipalComponent } from './components/info-principal/info-principal.component';
import { PageInicioComponent } from './page/page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { InicioRoutingModule } from './inicio-routing.module';




@NgModule({
  declarations: [
    InfoPrincipalComponent,
    PageInicioComponent,
    GalleryComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
InicioRoutingModule

  ],exports:[

  ]
})
export class InicioModule { }
