import {TestBed} from '@angular/core/testing';

import {PokedexService} from './pokedex.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {constantes} from '../../constants';
import {first} from 'rxjs';
import {HttpClient} from '@angular/common/http';

describe('PokedexService', () => {

  let httpMock: HttpTestingController;
  let httpClientMock: HttpClient;
  /**
   * exemple
   * https://pokeapi.co/api/v2/pokemon/ditto
   */
  let service: PokedexService;
  let nomDigimon: string = 'ditto';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    httpClientMock = TestBed.inject(HttpClient);
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('va récupèrer un pokemon dans l\'api', done => {
    service.getPokemonInfos(nomDigimon);
    httpMock.expectOne(constantes.URL_POKE_API + nomDigimon).flush(constantes.RESPONSE_API_MOCK);
    service.currentPokemon$
      .pipe(first())
      .subscribe((data) => {
        expect(data).toEqual(constantes.RESPONSE_API_MOCK);
        done();
      });
  });
});
