
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Bien } from 'src/app/user-auth/interfaces/bien';
import { Categorias } from 'src/app/user-auth/interfaces/Categorias';
import { Responsables } from 'src/app/user-auth/interfaces/Responsables';
import { delay, timer } from 'rxjs';
import { BienService } from 'src/app/shared/service/bien.service';

@Component({
  selector: 'agregar-bien-component',
  templateUrl: './agregar-bien.component.html',
  styleUrls: ['./agregar-bien.component.css']
})
export class AgregarBienComponent {

  categoriasBienes: Categorias[] = [];
  responsables: Responsables[] = [];

  bien: Bien = {
    nombre: '',
    descripcion: '',
    fechaAdquisicion: new Date,
    valorAdquisicion: 0,
    numeroSerie: '',
    marca: '',
    modelo: '',
    categoriaId: 0,
    ubicacion: '',
    usuarioRegistroId: 0,
    responsableId: 0,
  }

  fecha: string = '';

  constructor(
    private bienService: BienService,
    private router: Router

  ) {

    bienService.buscarCategorias().subscribe((categorias) => this.categoriasBienes = categorias);
    bienService.buscarResponsables().subscribe((responsable) => this.responsables = responsable);

  }

  addPet() {
    let user_id: string = sessionStorage.getItem('user_id')!;
    this.bien.usuarioRegistroId = parseInt(user_id);

    this.bienService.agregarBien(this.bien).subscribe((petadd) => console.log(petadd));

    timer(1500).subscribe(() => {
      this.router.navigateByUrl('/user/admin/dashboard');
    })


  }
}
