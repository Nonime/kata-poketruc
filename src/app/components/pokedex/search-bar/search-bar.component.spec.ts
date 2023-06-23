import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBarComponent} from './search-bar.component';
import {PokedexService} from '../../../services/pokedex.service';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokedexService
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
});
