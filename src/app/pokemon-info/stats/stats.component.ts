import { FormatService } from './../../core/services/format.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit, OnChanges {
  @Input() pokemonStats: any;

  constructor(private formatService: FormatService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    for (let i = 0; i < this.pokemonStats.length; i++) {
      this.pokemonStats[i].stat.name = this.formatService.formatStats(
        this.pokemonStats[i].stat.name
      );
    }
    console.log(this.pokemonStats[0]);
  }
}
