import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {constantes} from '../../constants';
import {first} from 'rxjs';

describe('PokedexService', () => {

  let httpMock: HttpTestingController;
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
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('va récupèrer un pokemon dans l\'api', done => {
    let testRequest = httpMock.expectOne(constantes.URL_POKE_API + nomDigimon, 'GET');
    testRequest.flush(constantes.RESPONSE_API_MOCK);
    expect(service).toBeTruthy();
    service.currentPokemon$
      .pipe(first())
      .subscribe((data) => {
        expect(data).toEqual(constantes.RESPONSE_API_MOCK);
        done();
      });
  });
});
