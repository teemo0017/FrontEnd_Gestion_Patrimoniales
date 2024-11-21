export interface BienList {
  id:                 number;
  nombre:             string;
  descripcion:        string;
  fechaAdquisicion:   Date;
  valorAdquisicion:   number;
  numeroSerie:        string;
  marca:              string;
  modelo:             string;
  categoria:          string;
  ubicacion:          string;
  usuarioCreador:     string;
  usuarioResponsable: string;
}
