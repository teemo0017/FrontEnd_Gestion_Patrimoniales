
import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Router } from '@angular/router';
import { Bien } from 'src/app/user-auth/interfaces/bien';
import { Categorias } from 'src/app/user-auth/interfaces/Categorias';
import { Responsables } from 'src/app/user-auth/interfaces/Responsables';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent {

  especiesInfo: Categorias[] = [];
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
    private petInfoService: PetService,
    private router: Router

  ) {

    petInfoService.findEspecies().subscribe((especie) => this.especiesInfo = especie);
    petInfoService.findResponsables().subscribe((responsable) => this.responsables = responsable);

  }

  addPet() {
    let user_id: string = sessionStorage.getItem('user_id')!;
    this.bien.usuarioRegistroId = parseInt(user_id);

    this.petInfoService.addPet(this.bien).subscribe((petadd) => console.log(petadd));

    timer(1500).subscribe(() => {
      this.router.navigateByUrl('/user/dashboard');
    })


  }
}
