import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';

  evolutionAPI = 'https://pokeapi.co/api/v2/evolution-chain/';

  specieAPI = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) {}

  getPokemonById(id: number) {
    return this.http.get<any[]>(this.pokemonAPI + id);
  }

  getPokemonByName(name: any) {
    return this.http.get<any[]>(this.pokemonAPI + name);
  }

  getSpecie(id: Number) {
    return this.http.get<any[]>(this.specieAPI + id);
  }

  getEvolution(url: string) {
    return this.http.get<any[]>(url);
  }
}
