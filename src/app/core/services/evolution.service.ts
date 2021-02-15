import { PokemonService } from './pokemon.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EvolutionService {
  aux1: any;
  aux2: any;

  firstEvolution: any;
  secondEvolution: any;
  currentPokemonSpecie: any;
  evolutionData: any;

  displaySecondRow: boolean = true;
  displayArrowCol: boolean = true;
  displaySecondPokemonImage: boolean = true;

  auxFirst: any;

  pokemonInfo = {
    id: Number,
    name: String,
    singleEvolution: false,

    firstEvolution: {
      id: Number,
      name: String,
    },

    secondEvolution: {
      id: Number,
      name: String,
    },
  };

  constructor(private pokemonService: PokemonService) {}

  getEvolutionData(pokemonId: any) {
    this.pokemonService.getSpecie(pokemonId).subscribe((data) => {
      this.currentPokemonSpecie = data;

      this.pokemonService
        .getEvolution(this.currentPokemonSpecie.evolution_chain.url)
        .subscribe((data) => {
          this.evolutionData = data;

          this.pokemonInfo.name = this.currentPokemonSpecie?.name;
          this.pokemonInfo.firstEvolution.name = this.evolutionData?.chain.evolves_to[0]?.species?.name;
          this.pokemonInfo.secondEvolution.name = this.evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name;

          if (this.pokemonInfo.firstEvolution.name !== undefined) {
            this.pokemonService
              .getPokemonByName(this.pokemonInfo.firstEvolution.name)
              .subscribe((data) => {
                this.aux1 = data;
                this.pokemonInfo.firstEvolution.id = this.aux1.id;
              });
          }

          if (this.pokemonInfo.secondEvolution.name !== undefined) {
            this.pokemonService
              .getPokemonByName(this.pokemonInfo.secondEvolution.name)
              .subscribe((data) => {
                this.aux2 = data;
                this.pokemonInfo.secondEvolution.id = this.aux2.id;
              });
          } else {
            this.pokemonInfo.secondEvolution.id = undefined!;
          }

          if (
            this.secondEvolution?.name == undefined &&
            this.secondEvolution?.id == undefined
          ) {
            this.pokemonInfo.singleEvolution = true;
          }
        });
    });

    return this.pokemonInfo;
  }
}
