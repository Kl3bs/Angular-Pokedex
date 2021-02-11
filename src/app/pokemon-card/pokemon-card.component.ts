import { PokemonService } from './../core/services/pokemon.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  pokemons: any = [30];

  @Output() pokemonIndex = new EventEmitter();
  @Input() opened: any;

  @Output() detailViewState = new EventEmitter();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    for (let i = 1; i <= 30; i++) {
      this.pokemonService.getPokemon(i).subscribe((data) => {
        this.pokemons[i] = data;
      });
    }

    console.log(this.pokemons);
  }

  getPokemonIndex(index: number) {
    console.log(index);
    this.pokemonIndex.emit(index);
    this.detailViewState.emit((this.opened = true));
  }
}
