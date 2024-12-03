
import { Component, OnInit } from '@angular/core';
import { BienList } from 'src/app/user-auth/interfaces/BienList';
import { Route, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BienService } from 'src/app/shared/service/bien.service';


@Component({
  selector: 'app-list-bienes',
  templateUrl: './lista-bienes.component.html',
  styleUrls: ['./lista-bienes.component.css']
})
export class ListaBienesComponent implements OnInit {

  constructor(private bienService: BienService, private router: Router
  ) {

  }
  bienInfo?: BienList[];

  searchQuery: string = '';


  ngOnInit(): void {
    this.bienService.buscarTodosBienes().subscribe((bieninfo) => {
      this.bienInfo = bieninfo;
    })
  }


  deleteCite(value: number) {
    this.bienService.borrarBien(value).subscribe(() => {

      this.bienService.buscarTodosBienes().subscribe((bienes) => {
        this.bienInfo = bienes;
      })

    });

  }

  editarBien(id: number) {
    this.router.navigate(['/user/gestionador/editar/bien', id]);
  }


  descargarPdf() {

    const body = this.bienInfo!.map((item) => [item.nombre, item.descripcion, item.numeroSerie, item.usuarioResponsable, item.valorAdquisicion]);

    const head: string[][] = [['Nombre', 'descripcion', 'Numero de Serie', 'Responsable', 'Valor']];

    const doc = new jsPDF();

    // Ruta del logo (puede ser una URL o Base64)
    const logo = './assets/3eb4f94a-0a20-491d-a269-1aa49a2c4ca7.jfif'; // Asegúrate de tener un archivo de logo en esta ruta

    // Agregar logo al encabezado
    const logoWidth = 40; // Ancho del logo
    const logoHeight = 20; // Alto del logo
    doc.addImage(logo, 'PNG', 10, 10, logoWidth, logoHeight);

    // Agregar título
    doc.setFontSize(18);
    doc.setFont('Helvetica', 'bold');
    doc.text('Reporte de Bienes Patrimoniales', 60, 20); // Texto del título
    doc.setFontSize(12);
    doc.text('Generado el: ' + new Date().toLocaleDateString(), 60, 27); // Fecha de generación

    // Línea divisoria
    doc.line(10, 35, 200, 35); // Coordenadas de la línea (x1, y1, x2, y2)

    // Datos de ejemplo

    // Encabezados y cuerpo de la tabla


    // Agregar tabla
    autoTable(doc, {
      startY: 40, // Comienza la tabla después del encabezado
      head,
      body,
      theme: 'grid', // Tema: plain, grid o striped
      headStyles: { fillColor: [22, 160, 133] }, // Color de fondo del encabezado
      bodyStyles: { fillColor: [242, 242, 242] }, // Color alternado del cuerpo
      alternateRowStyles: { fillColor: [255, 255, 255] }, // Color alternado
      styles: { font: 'Helvetica', fontSize: 10 }, // Fuente y tamaño de texto
    });

    // Footer con número de página
    const pageCount = doc.internal.pages.length;
    console.log(pageCount);

    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(`Página ${i} de ${pageCount}`, 105, 290, {
        align: 'center',
      });
    }

    // Descargar el PDF
    doc.save('reporte_bienes_gestionador.pdf');
  }
}
