import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  API = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }


  getPokemon(id:number){
    return this.http.get<any[]>(this.API+id);
  }
}
 