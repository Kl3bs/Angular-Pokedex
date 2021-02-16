import { FormatService } from './../../core/services/format.service';
import { PokemonService } from './../../core/services/pokemon.service';
import { Pokemon } from './../../pokemon-card/pokemon';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnChanges {
  constructor(
    private pokemonService: PokemonService,
    private formatService: FormatService
  ) {}

  @Input() pokemonData: Pokemon;
  pokemon: any;
  location_areas: any;
  isLoading = true;

  haveLocationArea = true;

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.pokemonData.id);
    this.pokemonService
      .getLocationArea(this.pokemonData?.id)
      .subscribe((data) => {
        this.location_areas = data;

        if (this.location_areas.length < 1) {
          this.haveLocationArea = false;
          this.isLoading = false;
        } else {
          for (let i = 0; i < this.location_areas.length; i++) {
            this.location_areas[
              i
            ].location_area.name = this.formatService.formatLocationArea(
              this.location_areas[i].location_area.name
            );
          }

          this.isLoading = false;
        }
      });
  }
}
