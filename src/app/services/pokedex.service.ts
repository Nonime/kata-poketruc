import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PokemonResponse} from '../interfaces/PokemonResponse';
import {constantes} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  currentPokemon$ = new BehaviorSubject<PokemonResponse | undefined>(undefined)

  constructor(private http: HttpClient) { }

  getPokemonInfos(pokemonName: string) {
    this.http.get<PokemonResponse>(constantes.URL_POKE_API + pokemonName).subscribe((value)   => {
      this.currentPokemon$.next(value);
    });
    return this.currentPokemon$;
  }
}
