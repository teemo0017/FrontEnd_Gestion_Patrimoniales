import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { SharingService } from 'src/app/shared/service/sharing.service';
import { Bien } from 'src/app/user-auth/interfaces/bien';
import { BienList } from 'src/app/user-auth/interfaces/BienList';
import { Categorias } from 'src/app/user-auth/interfaces/Categorias';
import { Responsables } from 'src/app/user-auth/interfaces/Responsables';
import { userToken } from 'src/app/user-auth/interfaces/userToken';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  public data$ : Observable<userToken>;
  private apiUrl : string = 'http://localhost:4000';
  private endpointFindInfoPetsById : string = '/bien/getallbienes';
  private endpointAddInfoPet : string = '/bien/addbien';
  private endpointUpdateBien : string = '/bien/actualizarbien';
  private endpointFindResponsables : string = '/user/findresponsables';
  private endpointRemoveCitesById : string = '/bien/borrarbien';
  private endpointfindPet: string = '/bien/buscarbien';
  private endpointAllCateogorias: string = '/bien/getallcategorias';


  constructor(
    private http:HttpClient,
    private sharingService : SharingService) {
      this.data$ = sharingService.SharingToken;
    }


    buscarTodosBienes() : Observable<BienList[]>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url = `${this.apiUrl}${this.endpointFindInfoPetsById}`;

      return   this.http.get<BienList[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))
    }


    agregarBien(bien : Bien) : Observable<Bien | null>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = new URL(`${this.apiUrl}${this.endpointAddInfoPet}`);

       return this.http.post<Bien>(url.toString(),bien,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));
    }

    actualizarBien(bien : Bien) : Observable<Bien | null>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = new URL(`${this.apiUrl}${this.endpointUpdateBien}`);

       return this.http.post<Bien>(url.toString(),bien,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));

    }


    buscarCategorias() : Observable<Categorias[] | []>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url = `${this.apiUrl}${this.endpointAllCateogorias}`;


      return this.http.get<Categorias[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))

    }

    buscarResponsables() : Observable<Responsables[] | []>{
      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url = `${this.apiUrl}${this.endpointFindResponsables}`;


      return this.http.get<Responsables[]>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }) .pipe(catchError ( ()=> of([]) ))

    }


    borrarBien(value : number) : Observable<void | Boolean>  {
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      const url = `${this.apiUrl}${this.endpointRemoveCitesById}/${value}`;

       return this.http.get<Boolean>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(false) ));
    }



    findBienId(idbien : number) : Observable<Bien | null> {
      let token_id : string = sessionStorage.getItem('jwt_token')!;

      const url  = `${this.apiUrl}${this.endpointfindPet}/${idbien}`;
       return this.http.get<Bien>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));


    }


    findAllCategorias() : Observable<Categorias | null> {
      let token_id : string = sessionStorage.getItem('jwt_token')!;
      // let user_id : string = sessionStorage.getItem('user_id')!;

      const url  = `${this.apiUrl}${this.endpointAllCateogorias}`;
      // url.searchParams.set('userId',user_id);
      // url.searchParams.set('petId',idPet.toString());

       return this.http.get<Categorias>(url,{
        headers : {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token_id}`
        }
      }).pipe(catchError ( ()=> of(null) ));

    }

}
