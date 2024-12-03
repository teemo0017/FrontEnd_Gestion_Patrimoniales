export interface Bien {
  id? : number
  nombre:            string;
  descripcion:       string;
  fechaAdquisicion:  Date;
  valorAdquisicion:  number;
  numeroSerie:       string;
  marca:             string;
  modelo:            string;
  categoriaId:       number;
  ubicacion:         string;
  usuarioRegistroId: number;
  responsableId:     number;
}
