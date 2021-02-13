import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {

  @Input() poke_id:any;
  pokemonId:any;

  constructor() { }

  ngOnInit(): void {
    this.pokemonId = this.poke_id;
  }

}
