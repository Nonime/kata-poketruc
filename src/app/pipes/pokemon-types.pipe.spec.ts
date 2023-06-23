import { PokemonTypesPipe } from './pokemon-types.pipe';
import {Type} from '../interfaces/PokemonResponse';

describe('PokemonTypesPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypesPipe();
    expect(pipe).toBeTruthy();
  });
  it('Affiche le type pour un pokemon monotype', () => {
    const pipe = new PokemonTypesPipe();
    let value = [{name: 'Normal',url: "http://google.com"}]as Type[];
    let actual: string = pipe.transform(value, ", ")as string;
    expect(actual).toEqual('Normal');
  });
  it('Affiche le type pour un pokemon duotype', () => {
    const pipe = new PokemonTypesPipe();
    let value = [{name: 'Normal',url: "notUsed"},
                 {name: 'Feu',url: "notUsed"}]as Type[];
    expect(pipe.transform(value, ", ")).toEqual('Normal, Feu');
  });

});
