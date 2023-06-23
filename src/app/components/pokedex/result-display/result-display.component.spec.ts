import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultDisplayComponent} from './result-display.component';
import {PokedexService} from '../../../services/pokedex.service';
import {constantes} from '../../../../constants';
import {of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('ResultDisplayComponent', () => {
  let component: ResultDisplayComponent;
  let fixture: ComponentFixture<ResultDisplayComponent>;
  let mockPokeService = {
    currentPokemon$: of(constantes.RESPONSE_API_MOCK),
    getPokemonInfos(pokemonName: string) {
      console.log('call with' + pokemonName);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokedexService
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ResultDisplayComponent]
    });
    fixture = TestBed.createComponent(ResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
