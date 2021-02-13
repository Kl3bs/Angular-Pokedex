import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/components/header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SidebarModule } from 'ng-sidebar';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { AboutComponent } from './pokemon-info/about/about.component';
import { StatsComponent } from './pokemon-info/stats/stats.component';
import { EvolutionsComponent } from './pokemon-info/evolutions/evolutions.component';
import { MovesComponent } from './pokemon-info/moves/moves.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonCardComponent,
    PokemonInfoComponent,
    AboutComponent,
    StatsComponent,
    EvolutionsComponent,
    MovesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
