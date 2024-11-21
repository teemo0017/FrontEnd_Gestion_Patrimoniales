

import { Component } from '@angular/core';
import { addCite } from 'src/app/user-auth/interfaces/addcite';
import { PetService } from '../../service/pets.service';
import { serviceInfo } from 'src/app/user-auth/interfaces/serviceInfo';
import { petInfo } from 'src/app/user-auth/interfaces/petsInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent {

services : serviceInfo[]=[];
pets : petInfo[]=[];


cite : addCite = {
  fecha:    '',
  servicio: ''
};

mascotaId : number = 0;

constructor(
  private petInfoService : PetService,
  private router: Router,
){

  this.petInfoService.findServicesPet().subscribe( (service) => this.services = service);
  //this.petInfoService.findInfoPets().subscribe( (pet) => this.pets = pet);
}


addCite() : void{

  this.petInfoService.addCite(this.cite,this.mascotaId).subscribe( (cite) => console.log(cite));
  this.router.navigateByUrl('/user/dashboard');

}

}



