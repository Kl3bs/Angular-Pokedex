import { Pokemon } from './../pokemon-card/pokemon';
import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  constructor() {}

  _opened: boolean = false;
  pokemonId: any = 0;

  pokemon = new Pokemon;


  ngOnInit(): void {

  }


  _toggleOpened(): void {
    this._opened = true;
  }

  _closeDetail() {
    this._opened = false;
  }


  receiveIndex(pokemon: Pokemon) {
    this.pokemon.id = pokemon.id;
    this.pokemon.name = pokemon.name;
    this.pokemon.type = pokemon.type;
  }

  active = 1;

}
