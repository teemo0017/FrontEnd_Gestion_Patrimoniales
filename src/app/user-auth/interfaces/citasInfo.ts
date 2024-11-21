import { petInfo } from "./petsInfo";

export interface citasInfo {
  id:       number;
  mascota:  petInfo;
  fecha:    Date;
  servicio: string;
}
