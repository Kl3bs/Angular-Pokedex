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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonCardComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
