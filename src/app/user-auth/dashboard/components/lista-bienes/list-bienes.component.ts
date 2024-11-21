
import { Component, OnInit } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { BienList } from 'src/app/user-auth/interfaces/BienList';


@Component({
  selector: 'app-list-bienes',
  templateUrl: './list-bienes.component.html',
  styleUrls: ['./list-bienes.component.css']
})
export class ListBienesComponent implements OnInit {

  constructor(  private petInfoService : PetService){

  }
  bienInfo? : BienList[];

  searchQuery: string = '';


  ngOnInit(): void {
    this.petInfoService.findInfoPets().subscribe( (bieninfo) => {
      this.bienInfo = bieninfo;
    })
  }

  navigateToAddBien() {
    // Lógica para navegar al formulario de creación
  }

  editBien(id: number) {
    // Lógica para editar el bien
    console.log('Editar bien:', id);
  }

  deleteCite(value : number){
    this.petInfoService.removeCite(value).subscribe( () => {

      this.petInfoService.findInfoPets().subscribe((cites) => {
        this.bienInfo = cites;
      })

    });

  }

}
