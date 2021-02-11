import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened:boolean = true;

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
