import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}

  formatLocationArea(area: any) {
    let aux;
    aux = area.replace(/-|area/gi, ' ');

    return aux;
  }
}
