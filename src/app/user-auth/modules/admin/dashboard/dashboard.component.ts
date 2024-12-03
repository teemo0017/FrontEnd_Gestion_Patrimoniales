

import { Component, OnInit } from '@angular/core';
import {ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';

import { map } from 'rxjs';
import { UserInfoService } from 'src/app/shared/service/user-info.service';
import { BienList } from 'src/app/user-auth/interfaces/BienList';
import { BienService } from '../../../../shared/service/bien.service';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartOptions!: Partial<ChartOptions>;

  bienInfo?: BienList[];

  constructor(

    private userInfoService: UserInfoService,
    private bienService: BienService
  ) {
    this.graficaUsuarios();
  }

  ngOnInit(): void {

    //BUSCAR 5 LOS BIENES
    this.bienService.buscarTodosBienes().subscribe((bieninfo) => {
      this.bienInfo = bieninfo;
    });

    //BUSCA TODOS LOS USUARIOS  POR ROL

  }


  public graficaUsuarios() {
    this.userInfoService.findAllUserInfo()
      .pipe(
        map((userInfo) => {
          // Contar usuarios por rol
          const filtradoDeRol = userInfo.reduce(
            (acc: { [key: string]: number }, user) => {
              acc[user.role] = (acc[user.role] || 0) + 1;
              return acc;
            },
            {}
          );

          // Preparar datos para la gráfica
          return {
            roles: Object.keys(filtradoDeRol), // ["ADMIN", "GESTIONADOR", "INVITADO"]
            counts: Object.values(filtradoDeRol), // [5, 3, 2]
          };
        })
      )
      .subscribe(({ roles, counts }) => {
        // Configuración de la gráfica
        this.chartOptions = {
          series: counts,
          chart: {
            width: 400,
            type: "pie",
          },
          labels: roles,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        };

        // Depuración para verificar los datos
        console.log("Roles:", roles);
        console.log("Counts:", counts);
      });
  }

}
