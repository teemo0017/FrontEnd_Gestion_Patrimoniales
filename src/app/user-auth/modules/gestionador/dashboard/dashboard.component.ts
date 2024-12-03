

import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { UserInfoService } from 'src/app/shared/service/user-info.service';
import { BienList } from 'src/app/user-auth/interfaces/BienList';
import { BienService } from '../../../../shared/service/bien.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  bienInfo?: BienList[];

  constructor(
    private bienService: BienService
  ) {
  }

  ngOnInit(): void {

    //BUSCAR 5 LOS BIENES
    this.bienService.buscarTodosBienes().subscribe((bieninfo) => {
      this.bienInfo = bieninfo;
    });

    //BUSCA TODOS LOS USUARIOS  POR ROL

  }
}
