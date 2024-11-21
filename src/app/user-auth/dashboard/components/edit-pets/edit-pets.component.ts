
import { Component, OnInit } from '@angular/core';
import { petInfo } from 'src/app/user-auth/interfaces/petsInfo';
import { PetService } from '../../service/pets.service';
import { especiesInfo } from 'src/app/user-auth/interfaces/especiesInfo';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  especiesInfo : especiesInfo[] = [];

  pet!: petInfo;

  fecha : string = '';

  constructor(
    private petInfoService : PetService,
    private router: Router,
    private activedRouter: ActivatedRoute,

  ){

    // petInfoService.findEspecies().subscribe ( (especie) => this.especiesInfo = especie);

  }


  ngOnInit(): void {
    this.activedRouter.params.pipe(
      switchMap(({id}) => this.petInfoService.findPet(id))
    ).subscribe(
      (pet) => {
        if(!pet) return this.router.navigateByUrl('');
        console.log(pet);
        return  this.pet = pet;
      }

    )
  }

  EditPet(){
    // console.log(this.fecha);

    this.petInfoService.editPet(this.pet.id!,this.pet).subscribe( (petEdit) => console.log(petEdit));

    this.router.navigateByUrl('/user/dashboard');



  }



}
