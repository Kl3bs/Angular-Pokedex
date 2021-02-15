import { PokemonService } from './../../core/services/pokemon.service';
import { Component, Input, OnInit, NgModule, OnChanges } from '@angular/core';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css'],
})
export class EvolutionsComponent implements OnChanges {
  @Input() pokemonData: any;

  firstEvolution: any;
  secondEvolution: any;
  currentPokemonSpecie: any;
  evolutionData: any;

  displaySecondRow: boolean = true;
  displayArrowCol: boolean = true;
  displaySecondPokemonImage: boolean = true;

  pokemonInfo = {
    id: Number,
    name: String,

    evolutions: [
      {
        firstEvolutionName: String,
      },

      {
        secondEvolutionName: String,
      },
    ],
  };

  constructor(private http: PokemonService) {}

  ngOnInit(): void {}

  async ngOnChanges() {
    await this.http.getSpecie(this.pokemonData).subscribe((data) => {
      this.currentPokemonSpecie = data;
      // console.log(this.currentPokemonSpecie);

      this.http
        .getEvolution(this.currentPokemonSpecie.evolution_chain.url)
        .subscribe((data) => {
          this.evolutionData = data;

          this.pokemonInfo.name = this.currentPokemonSpecie?.name;
          this.pokemonInfo.id = this.pokemonData;
          this.pokemonInfo.evolutions[0] = this.evolutionData?.chain.evolves_to[0]?.species?.name;
          this.pokemonInfo.evolutions[1] = this.evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name;

          if (this.pokemonInfo?.evolutions[1] == undefined) {
            this.displayArrowCol = false;
            this.displaySecondPokemonImage = false;
          }

          if (
            this.pokemonInfo.name ==
            this.evolutionData?.chain.evolves_to[0]?.species?.name
          ) {
            this.pokemonInfo.evolutions[0] = this.evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name;
          }

          if (
            this.pokemonInfo.name ==
              this.evolutionData?.chain.evolves_to[0]?.species?.name ||
            this.pokemonInfo.name ==
              this.evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species
                .name ||
            this.pokemonInfo.evolutions[1] == undefined
          ) {
            this.displaySecondRow = false;
          }

          if (
            this.pokemonInfo.name ==
            this.evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name
          ) {
            this.displayArrowCol = false;
          }
          // console.log(this.evolutionData);

          console.log(this.pokemonInfo);
        });
    });

    if (this.pokemonData % 3 == 0 && this.pokemonData != 27) {
      this.firstEvolution = -1;
      this.secondEvolution = -1;
    } else if ((this.pokemonData + 1) % 3 == 0) {
      this.firstEvolution = this.pokemonData + 1;
      this.secondEvolution = -1;
    } else {
      this.firstEvolution = this.pokemonData + 1;
      this.secondEvolution = this.pokemonData + 2;
    }
  }
}
