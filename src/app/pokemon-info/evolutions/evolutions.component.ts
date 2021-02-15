import { EvolutionService } from './../../core/services/evolution.service';
import { Component, Input, OnInit, NgModule, OnChanges } from '@angular/core';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css'],
})
export class EvolutionsComponent implements OnChanges {
  @Input() pokemonId: any;
  @Input() pokemonInfo: any;

  constructor(private evolutionService: EvolutionService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.pokemonInfo = this.evolutionService.getEvolutionData(this.pokemonId);
    console.log(this.pokemonInfo);
  }
}
