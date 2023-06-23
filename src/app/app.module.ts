import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SearchBarComponent} from './components/pokedex/search-bar/search-bar.component';
import {ResultDisplayComponent} from './components/pokedex/result-display/result-display.component';
import {FormsModule} from '@angular/forms';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {PokemonTypesPipe} from './pipes/pokemon-types.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultDisplayComponent,
    CapitalizePipe,
    PokemonTypesPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
