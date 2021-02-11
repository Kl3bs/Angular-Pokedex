import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  _opened: boolean = true;
  pokemonId: any = 0;

  _toggleOpened(): void {
    this._opened = true;
  }

  _closeDetail() {
    this._opened = false;
  }

  receiveIndex(pokemonIndex: number) {
    console.log('pai:' + pokemonIndex);
    this.pokemonId = pokemonIndex;
  }

  //Toggle display data

  active = 1;

}
