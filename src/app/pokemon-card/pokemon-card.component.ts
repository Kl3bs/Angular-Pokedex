import { PokemonService } from './../core/services/pokemon.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  pokemons: any = [30];
  pokemons2: any;

  @Output() pokemonIndex = new EventEmitter<any>();
  @Input() opened: any;

  @Output() detailViewState = new EventEmitter();

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<void> {
    await this.getAllPokemons();
  }

  async getAllPokemons() {
    for (let i = 1; i <= 40; i++) {
      await this.pokemonService
        .getPokemonById(i)
        .subscribe((data) => (this.pokemons[i] = data));
    }
  }

  pokemon_data = new Pokemon();

  async getPokemonIndex(index: number, type: string, name: string) {
    this.pokemon_data.id = index;
    this.pokemon_data.type = type;
    this.pokemon_data.name = name;
    this.pokemonIndex.emit(this.pokemon_data);
    this.detailViewState.emit((this.opened = true));
  }
}
