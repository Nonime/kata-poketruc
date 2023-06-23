import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../interfaces/PokemonResponse';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {
  transform(tableauDesTypes: Type[], separateur: string): string {
    let resultat: string = '';
    for (let i = 0; i < tableauDesTypes.length; i++){
      const value = tableauDesTypes[i];
      if (i >0) resultat += separateur;
      resultat = resultat + value.name;
    }
    return resultat;
  }

}
