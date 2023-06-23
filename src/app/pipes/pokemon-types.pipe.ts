import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../interfaces/PokemonResponse';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {
  transform(tableauDesTypes: Type[], arg: string): string {
    let resultat: string = '';
    tableauDesTypes.forEach(value => {
      resultat = resultat + value.name;
    });
    return resultat;
  }

}
