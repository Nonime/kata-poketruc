import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PokemonResponse } from '../interfaces/PokemonResponse';
import {constantes} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  currentPokemon$ = new BehaviorSubject<PokemonResponse | undefined>(undefined)

  constructor(private http: HttpClient) { }

  getPokemonInfos(pokemonName: string) {
    let url = constantes.URL_POKE_API + pokemonName;
    console.log('url:' + url);
    this.http.get<PokemonResponse>(url).subscribe((value)   => {
      this.currentPokemon$.next(value);
    });
    return this.currentPokemon$;
  }
}
