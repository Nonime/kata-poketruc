import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBarComponent} from './search-bar.component';
import {PokedexService} from '../../../services/pokedex.service';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  let mockPokedexService = {
    currentPokemon$: null,
    getPokemonInfos: jest.fn()
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PokedexService, useValue: mockPokedexService}
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ],
      declarations: [SearchBarComponent]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('appel get pokemon info lors de l\'appel a la fonction onSubmit', () => {
    const testForm = <NgForm>{
      form: {
        value: {
          'pokemon-name': 'ditto'
        }
      }
    };

    component.onSubmit(testForm);
    expect(mockPokedexService.getPokemonInfos).toHaveBeenCalled();
  });
});
