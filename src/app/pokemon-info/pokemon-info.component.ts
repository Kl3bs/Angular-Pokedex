import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //   opened: boolean = true;

  //   _toggleSidebar() {
  //     this.opened = !this.opened;
  //   }

  _opened: boolean = false;
  _modeNum: number = 0;
  _positionNum: number = 0;

  // _autoCollapseHeight = null;
  // _autoCollapseWidth = null;

  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  _toggleOpened(): void {
    this._opened = !this._opened;
  }

  _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }
}
