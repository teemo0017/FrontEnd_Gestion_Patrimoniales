
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { Categorias } from 'src/app/user-auth/interfaces/Categorias';
import { Responsables } from 'src/app/user-auth/interfaces/Responsables';
import { Bien } from 'src/app/user-auth/interfaces/bien';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BienService } from 'src/app/shared/service/bien.service';

@Component({
  selector: 'editar-bien-component',
  templateUrl: './editar-bien.component.html',
  styleUrls: ['./editar-bien.component.css']
})
export class EditarBienComponent implements OnInit {
  public bienForm: FormGroup;
  Categorias: Categorias[] = [];
  responsables: Responsables[] = [];
  public bienId!: number;

  constructor(
    private bienService: BienService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder

  ) {

    bienService.buscarCategorias().subscribe((especie) => this.Categorias = especie);
    bienService.buscarResponsables().subscribe((responsable) => this.responsables = responsable);


    this.bienForm = this.fb.group({
      nombre: ['', [Validators.required,Validators.maxLength(12)]],
      descripcion: [''],
      fechaAdquisicion: ['', Validators.required],
      valorAdquisicion: ['', Validators.required],
      numeroSerie: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      categoriaId: ['', Validators.required],
      ubicacion: ['', Validators.required],
      responsableId: ['', Validators.required],

    })
  }


  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.bienId = Number(params.get('id'));

      this.cargarBien(this.bienId);



    })


  }

  editBien() {
    if (this.bienForm.valid) {
      let user_id: string = sessionStorage.getItem('user_id')!;

      let bien: Bien = { ...this.bienForm.value, id: this.bienId, usuarioRegistroId: parseInt(user_id) };

      this.bienService.actualizarBien(bien).subscribe(() => console.log('actualizado'));

      timer(1500).subscribe(() => {
        this.router.navigateByUrl('/user/admin/lista/bienes');
      })

    }
  }


  public cargarBien(idBien: number) {
    this.bienService.findBienId(idBien).subscribe((bien) => {

      this.bienForm.patchValue({

        nombre: bien?.nombre,
        descripcion: bien?.descripcion,
        fechaAdquisicion: bien?.fechaAdquisicion,
        valorAdquisicion: bien?.valorAdquisicion,
        numeroSerie: bien?.numeroSerie,
        marca: bien?.marca,
        modelo: bien?.modelo,
        categoriaId: bien?.categoriaId,
        ubicacion: bien?.ubicacion,
        responsableId: bien?.responsableId,
      })
    });
  }


}
