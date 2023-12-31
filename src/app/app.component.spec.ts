import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ResultDisplayComponent} from './components/pokedex/result-display/result-display.component';
import {SearchBarComponent} from './components/pokedex/search-bar/search-bar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PokedexService} from './services/pokedex.service';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PokedexService
    ],
    imports: [
      FormsModule,
      HttpClientTestingModule,
    ],
    declarations: [
      AppComponent,
      ResultDisplayComponent,
      SearchBarComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokedex-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokedex-app');
  });

});
